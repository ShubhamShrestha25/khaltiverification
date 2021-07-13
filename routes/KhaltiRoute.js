const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/transaction", function (req, res) {
  let data = {
    token: req.query.token,
    amount: +req.query.amount,
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Key test_secret_key_ed6cdba88a1649068eff4d2f5047b83c",
    },
  };

  axios
    .post("https://khalti.com/api/v2/payment/verify/", data, config)
    .then((response) => {
      console.log(response);
      res.json({
        success: true,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        success: false,
      });
    });
});

module.exports = router;
