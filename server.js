require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const session = require("express-session");
const flash = require('express-flash');
const port =  process.env.PORT || 3300;
const path = require('path');
const Emitter = require('events');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// set Template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


app.get("/", (req, res)=>{
    res.render("home")
});


app.get('/cart', (req, res)=>{
    res.render('customers/cart');
});

app.get('/login', (req, res)=>{
    res.render('auth/login');
});


app.get('/register', (req, res)=>{
    res.render('auth/register');
});




app.listen(port, ()=> console.log(`Server running on port ${port}`));

    