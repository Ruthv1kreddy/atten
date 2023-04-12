const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use("/", async (req, res) => {
  let query = req.query;

  console.log(query);
  let myurl = new URL("https://muerp.mahindrauniversity.edu.in/markAtt.json");
  const params = myurl.searchParams;
  console.log(query.at);
  console.log(query.ld);
  params.append("at", query.at);
  params.append("ld", query.ld);
  if (!id && !ld) {
    return res.status(400).json({ err: "data not provided" });
  }

  try {
    console.log(myurl.toString());
    const response = await axios.get(myurl.toString());
    console.log(response.data + " " + id);
    // if (!response.ok) {
    //   return res.status(200).json();
    // } else {
    // const data = await response.json();
    return res.status(200).json(response.data);
  } catch (err) {
    console.log(err + " " + id);
    return res.status(400).json(err);
  }
});
app.listen(8080);
