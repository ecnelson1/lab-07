const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('createOrder route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('creates a new order in our database and sends an email message', async() => {
    const res = await request(app)
      .post('/api/v1/orders')
      .send({ quantity: 10, item: 'Cheese Wheels' });
    expect(res.body).toEqual({
      id: '1',
      item: 'Cheese Wheels',
      quantity: 10,
    });
  });
});

describe('getOrders route', () => {
  it('returns all the orders in the database', async () => {
    const res = await request(app)
      .get('/api/v1/orders');
    expect(res.body).toEqual([{
      id: '1',
      item: 'Cheese Wheels',
      quantity: 10,
    }]);
  });
});

describe('getOrderById route', () => {
  it('returns all the orders in the database for the given Id', async () => {
    const res = await request(app)
      .get('/api/v1/orders/1');
    expect(res.body).toEqual({
      id: '1',
      item: 'Cheese Wheels',
      quantity: 10,
    });
  });
});

describe('updateOrder route', () => {
  it('updates the order quantity in the database for the given Id and sends a text message', async () => {
    const res = await request(app)
      .put('/api/v1/orders/1')
      .send({ quantity: 100, item: 'Cheese Wheels' });
    expect(res.body).toEqual({
      id: '1',
      item: 'Cheese Wheels',
      quantity: 100,
    });
  });
});

describe(' deleteOrderById route', () => {
  it('deletes the order in the database for the given Id', async () => {
    const res = await request(app)
      .delete('/api/v1/orders/1');
    expect(res.body).toEqual({
      id: '1',
      item: 'Cheese Wheels',
      quantity: 100,
    }); //deleted item
  });
});
