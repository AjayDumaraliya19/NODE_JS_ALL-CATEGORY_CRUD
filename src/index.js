const http = require('http'); /* === http server declered in the variable === */
const express = require("express"); /* === express server declered in the variable === */
const { connectDB } = require('./db/dbConnection'); /* === connected the database using DB folder === */
const config = require('./config/config');
const bodyParser=require('body-parser')
const routes = require('./routes/v1'); /* === Routes connection path === */

// http.createServer((req, res) => {
//     res.write("<h1>Hello MY name is ajay, I'm create the local host</h1>");
//     res.end();
// }).listen(5000);


// const serverHost = require('http');
// serverHost.createServer(function (req, res) {
//     res.writeHead(200 /** Status code (ok) */ , {
//         'Content-Type': 'text/html'
//     });
//     res.write('Hello World!');
//     res.end();
// }).listen(config.port);


// create server using express js
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const port = 4500;

// app.get('/', (req, res) => {
//     res.send('Hello programmer!');
// });
// app.get('/about', (req, res) => {
//     res.send('My name is Ajay Dumaraliya');
// });
// app.get('/service', (req, res) => {
//     res.send('I\'m full stack web developer student.');
// });
// app.get('/contact', (req, res) => {
//     res.send('My contact number is 1234567890.');
// });

// app.listen(port, () => {
//     console.log(`app listening on port http://localhost:${port}`);
// });


/* Routes connection */
app.use("/v1", routes);

/* Whenever route not created and you try to use that route then throw error.  */
app.use((req, res, next) => {
    next(new Error("Route not found!"));
})

/* Database connection */
connectDB();

// /** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 3000!");
});