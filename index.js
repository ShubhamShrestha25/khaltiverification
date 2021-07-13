const express = require("express");
const app = express();
const route = require("./routes/khaltiRoute");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

app.listen(5000, function (error) {
  if (error) {
    console.log("SOMTHING WENT WRONG");
  } else {
    console.log("SERVER IS RUNNING ON PORT 5000");
  }
});
