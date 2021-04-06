const Order = require('../models/order');
const { sendEmail } = require('../utils/aws');

module.exports = class OrderService {
  static async create({ quantity, item }) {
    await sendEmail(
      `New Order received for ${item} for ${quantity}`
    );
    const order = await Order.insert({ quantity, item });

    return order;
  }
  static async update({ quantity, item }, id) {
    await sendEmail(
      `Order ${quantity} of ${item} UPDATED for ${id}`
    );
    const order = await Order.update({ quantity, item }, id);
    return order;
  }
  static async cancel(id) {
    await sendEmail(
      `Order CANCELED for ${id}`
    );
    const order = await Order.delete(id);
    return order;
  }

};
