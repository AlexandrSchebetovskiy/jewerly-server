module.exports = function contactsMail(to, data) {
    return {
        from: '"Jewwrly Store" <s.shebet@gmail.com>',
        to: to,
        subject: 'Your order is accepted',
        html:`
        <h1>Order</h1>
        <hr>
        `
    }
}