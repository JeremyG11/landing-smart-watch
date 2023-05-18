require("dotenv").config();
const { Chapa } = require("chapa-nodejs");

const chapa = new Chapa({
  secretKey: process.env.CHAPA_SECRET_KEY,
});

const checkout = async (req, res) => {
  try {
    const trans_ref = await chapa.generateTransactionReference();

    const response = await chapa.initialize({
      first_name: "John",
      last_name: "Doe",
      email: "john@gmail.com",
      currency: "ETB",
      amount: "200",
      tx_ref: trans_ref,
      callback_url: process.env.CLIENT_URL,
      return_url: "https://www.google.com",
      customization: {
        title: "Autohub e-vehicle business",
        description: "Your payment is alive!",
      },
      subaccounts: {
        id: "80a510ea-7497-4499-8b49-ac13a3ab7d07",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  checkout,
};
