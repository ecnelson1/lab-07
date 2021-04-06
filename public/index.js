const form = document.getElementById('create-orders');
const ul = document.getElementById('orders');

const appendOrder = (order) => {
  const li = document.createElement('li');
  li.textContent = `${order.item} - ${order.quantity}`;
  ul.appendChild(li);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fd = new FormData(form);

  fetch('/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item: fd.get('Item'),
      quantity: fd.get('Quantity'),
    }),
  })
    .then((res) => res.json())
    .then(appendOrder);
});

fetch('/api/v1/orders')
  .then((res) => res.json())
  .then((orders) => {
    orders.forEach(appendOrder);
  });
