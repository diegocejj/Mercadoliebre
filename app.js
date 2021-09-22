const express = require("express");
const path = require("path");

const app = express();

const staticFiles = express.static("./public");
app.use(staticFiles);

app.get("/", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/home.html");
    res.sendFile(fileToSend);
});

app.get('/register',(req,res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/register.html");
    res.sendFile(fileToSend);
});

/*
// Redirecciono a la pagina principal
app.post('/register',(req,res) => {
    // ruta del archivo
    res.redirect("/"));
});
*/

app.listen(3030, () => {
    console.log(
        "Servidor web corriendo en la direccion",
        "http://localhost:3030/"
        );
});
