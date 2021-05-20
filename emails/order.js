module.exports = function(to, data){
    let items = ``
    cart = data.dataCart
    cart.forEach(i=> {
      items += `
      <tr>
        <td>${i}</td>
      </tr>
      `
    })


    return {
    from: '"Jewwrly Store" <s.shebet@gmail.com>',
    to: to,
    subject: 'Your order is accepted',
    html:`
    <h1>Order</h1>
    <hr>
    <table>
      <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      ${items}
    </table>
    `
    }
  }