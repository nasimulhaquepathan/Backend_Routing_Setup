const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middlewere/errorMiddlewre");
const cookieParser = require("cookie-parser");

const app = express();
// Middleweres
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(dotenv());

// Route Middleweres
app.use("/api/users", userRoute);
// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middlewere
app.use(errorHandler);

//  Connect to DB and start server
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server runnig on port ${PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
