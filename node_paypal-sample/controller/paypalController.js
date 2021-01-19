const paypal = require("paypal-rest-sdk");

//Create New Payment
const payInit = (req, res) => {
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:5000/payment/success",
      cancel_url: "http://localhost:5000/payment/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Full stack developer course",
              sku: "001",
              price: "25.00",
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: "25.00",
        },
        description: "full stack developer course",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
      // console.log(payment)
      // res.send('test')
    }
  });
};

//Payment Success
const paymentSucess = (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "25.00",
        },
      },
    ],
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(payment);
        res.send(`<center><h1>PAYMENT SUCESSFULL</h1></center>`);
      }
    }
  );
};

//Payment Cancel
const paymentCancel = (req, res) => res.send("Cancelled");

module.exports = {
  payInit,
  paymentSucess,
  paymentCancel,
};
