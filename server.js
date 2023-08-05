const express = require("express");
const path = require("path");

const app = express();
const publicFolderPath = path.join(__dirname, "public");

app.use(express.static(publicFolderPath));

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
