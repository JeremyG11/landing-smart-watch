require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/payment", require("./routes/paymentRoutes"))
 
// Connect to mongodb atlas in the cloud
const port = process.env.PORT || 6767;
mongoose
  .connect(process.env.mongoURI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
