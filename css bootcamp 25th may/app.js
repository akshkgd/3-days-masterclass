
   const Razorpay = require('razorpay');

   const razorpay = new Razorpay({
     key_id: 'your_key_id',
     key_secret: 'your_key_secret',
   });



   app.post('/payment', (req, res) => {
     const options = {
       amount: 1000, // Payment amount in paise
       currency: 'INR',
       receipt: 'order_receipt',
       payment_capture: 1,
     };

     razorpay.orders.create(options, (err, order) => {
       if (err) {
         console.error(err);
         res.status(500).send('An error occurred');
         return;
       }

       res.json(order);
     });
   });
 


   // Assuming you have a button with the id "payButton"
   document.getElementById('payButton').onclick = function () {
     fetch('/payment', { method: 'POST' })
       .then((response) => response.json())
       .then((order) => {
         var options = {
           key: 'your_key_id',
           amount: order.amount,
           currency: order.currency,
           name: 'Your Store',
           description: 'Payment for order',
           order_id: order.id,
           handler: function (response) {
             // Handle payment success
             console.log(response);
           },
           prefill: {
             email: 'user@example.com',
             contact: '9999999999',
           },
         };

         var rzp = new Razorpay(options);
         rzp.open();
       });
   };
   ```

Remember to replace `'your_key_id'` and `'your_key_secret'` with your actual Razorpay API credentials.

This is a basic example to get you started with integrating Razorpay into your Node.js application. You'll need to handle additional scenarios like capturing payment status, handling webhooks, and ensuring secure communication with Razorpay API as per your application's requirements. Refer to the Razorpay documentation for more details and advanced usage options.