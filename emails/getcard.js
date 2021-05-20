module.exports = function getCardMail(to, data) {
 return {
    from: '"Jewwrly Store" <s.shebet@gmail.com>',
    to: to,
    subject: 'Your order is accepted',
    html:`
    <h1>Card ordered</h1>
    <hr>
    
    `
 }   
}