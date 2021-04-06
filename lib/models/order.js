
const pool = require('../utils/pool');

module.exports = class Order {
  id;
  item;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.item = row.item;
    this.quantity = row.quantity;
  }

  static async insert(order) {
    const {
      rows,
    } = await pool.query(
      'INSERT INTO orders (quantity, item) VALUES ($1, $2) RETURNING *',
      [order.quantity, order.item]
    );

    return new Order(rows[0]);
  }

  static async get() {
    const { rows } = await pool.query('SELECT * FROM orders');
    return rows.map((row) => new Order(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM orders WHERE id=$1', [id]);
    return new Order(rows[0]);
  }

  static async update(order, id) {
    const { rows } = await pool.query(`
      UPDATE orders
      SET quantity = $1,
      item = $2
      WHERE id = $3
      RETURNING *
       `,
    [order.quantity, order.item, id]
    );
    return new Order(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM orders WHERE id=$1 RETURNING *', [id]);
    return new Order(rows[0]);
  }
};
