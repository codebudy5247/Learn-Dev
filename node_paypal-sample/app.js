const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config()

//Paypal Config
const paypal = require("paypal-rest-sdk");
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AeEVJHkYyTF0l1I0Ag1eLhLnCWuC3QGRVfTKZuzP71PvxzQHtv1PPATz5zZW5HXUL0a8Lk8LGJSn0zFk",
  client_secret:
    "EObl9x6zQ7OvsugaZGFM5rfWpOer-O52sCbK8FP9kJqGOuf1t6dCMGZ_5IyLdk8vPI0V6iVgyMPUjtrF",
});

const app = express();

//Views
app.set("view engine", "ejs");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Import routes
const paymentRoutes = require("./routes/paypal")
const paytmRoutes = require('./routes/paytm')



//Middleware for consoling every request
app.use((req, res, next) => {
  console.log(`${req.method}`.bold.green + `  ${req.originalUrl}`.dim);
  next();
});

//Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/payment",paymentRoutes)
app.use('/pay-with-paytm',paytmRoutes)



app.listen(5000, () => {
  console.log(`server started`.bgYellow);
});
