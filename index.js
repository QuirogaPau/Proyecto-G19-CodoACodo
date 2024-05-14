const express = require("express");
const path = require("path");
const app = express();



app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "src", "templates")));
app.use(express.static(path.join(__dirname, "src", "templates", "scripts")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
