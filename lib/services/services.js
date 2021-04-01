const Order = require('../models/order');
const { sendSES } = require('../utils/aws');

module.exports = class OrderService {
  static async create({ quantity }) {
    await sendSES(
      `New Order received for ${item} for ${quantity}`
    );

    const order = await Order.insert({ quantity });

    return order;
  }
  static async update({ quantity }, { item }, id) {
    await sendSES(
      `Order ${quantity} of ${item} UPDATED for ${id}`
    );
    const order = await Order.update({ quantity }, { item }, id);
    return order;
  }
  static async cancel(id) {
    await sendSES(
      `Order CANCELED for ${id}`
    );
    const order = await Order.delete(id);
    return order;
  }

};
