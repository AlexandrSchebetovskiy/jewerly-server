module.exports = function(to, cart){
    let items = ``
    cart.forEach(i=> {
      items += `
      <div>x${i.count} of ${i.name}</div>
      `
    })
    return {
    from: '"Jewwrly Store" <s.shebet@gmail.com>',
    to: to,
    subject: 'Your order is accepted',
    html:`
    <h1>Order</h1>
    <hr>
    ${items}
    `
    }
  }