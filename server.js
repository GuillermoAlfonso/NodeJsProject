const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// set the view engine to ejs
app.set('view engine', 'ejs');

// fijar la ruta de ejs
app.set('views', './src/views');

// define a root route
app.get('/', (req, res) => {
  res.render('pages/index');
});

// define a root route
app.get('/about', (req, res) => {
  res.render('pages/about');
});

// Require usuarios routes
const usuariosRoutes = require('./src/routes/usuario.routes')

// using as middleware
app.use('/api/v1/usuarios', usuariosRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});