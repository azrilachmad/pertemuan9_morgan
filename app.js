
// Set Variable for Port 
const port = 3000;

// Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// EJS
app.set('view engine', 'ejs');
// Use Express Layout
app.use(expressLayouts);
app.set('layout', './layouts/layout')

// Static File
app.use(express.static('public'))
app.use('/css', express.static(__dirname, + 'public/css'))
app.use(express.static('public'))
app.use('/images', express.static(__dirname, + 'public/images'))


// Morgan
const morgan = require('morgan')
app.use(morgan('dev'))



cont = [
  {
    name: "Azril",
    email: "azril@gmail.com",
  },
  {
    name: "Ujang",
    email: "ujang@gmail.com",
  },
  {
    name: "Udin",
    email: "udin@gmail.com",
  },
];

app.use((req, res, next) => {
  console.log('Time', Date.now())
  next()
})

app.get('/', function(req, res) {
  var locals = {
    nama: 'Azril',
    title: 'Webserver EJS',
    header: 'header',
    nav: 'nav',
    footer: 'footer'
  };
  res.render('index',locals);
});

app.get("/about", (req, res) => {
  // res.send('Halaman About')
  // res.sendFile('./about.html', {root: __dirname})
  res.render("about", {title: "Webserver EJS", cont});
});

app.get("/contact", (req, res) => {
  // res.send('Halaman Contact')
  // res.sendFile('./contact.html', {root: __dirname})
  res.render("contact", {title: "Webserver EJS"});
});

app.get("/product/", function (req, res) {
  // res.send(`Product id : ${req.query.id} <br> category : ${req.query.category}`)
  res.render("product", {title: "Webserver EJS"});
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Not Found : 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
