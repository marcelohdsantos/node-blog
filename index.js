const express = require("express");
const app = express();
const connection = require("./database/database");

require('dotenv').config();

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//view engine
app.set('view engine', 'ejs');

//static
app.set(express.static('public'));

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

//Database
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso!");
}).catch((error) => {
    console.log("Conexão com o banco falhou: ",error);
})

//routes
app.use("/", categoriesController);
app.use("/", articlesController);

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
})

const port = parseInt(`${process.env.PORT}`);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});