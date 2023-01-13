require("dotenv");
const express = require("express");
const formData = require("express-form-data");
const cors = require("cors");

//Routes
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

// Uncomment this when deployment
/*
  const allowList = []
  const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true }
    } else {
      corsOptions = { origin: false } 
    }
    callback(null, corsOptions) 
  }
  app.use(cors(corsOptionsDelegate)) 
*/

app.use(cors());
app.use(formData.parse());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
