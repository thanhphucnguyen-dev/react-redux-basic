
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/v1/update", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, [2000]);
})



app.listen(4000, () => {
  console.log("Server is running on port 4000");
})
