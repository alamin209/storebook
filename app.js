const express = require("express")
const dotenv = require("dotenv")

//Database Connection path 
const connectDB = require('./config/db');
const morgan = require("morgan");

//template engine
const exphbs  =  require('express-handlebars');

//Configuration 
dotenv.config({ path: "./config/config.env" });
connectDB()

const app = express();

//logging 
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//handlbars
 app.engine('.hbs',  exphbs.engine({ defaultLayout:'main',   extname:'.hbs' }));
 app.set('view engine','.hbs');


 //Route
 
 app.use('/',require('./routes/index'))
 
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`)
);
