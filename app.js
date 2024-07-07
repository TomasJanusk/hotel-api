const express = require("express");
const hotelRouter = require("./routes/hotelRoutes");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
// app.use((req, res, next) => {
//   console.log("Hello from midleware");
//   next();
// });

app.use("/api/v1/hotels", hotelRouter);

module.exports = app;
