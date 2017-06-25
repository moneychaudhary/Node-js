const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


var app = express();
var port = process.env.PORT || 3000;

app.get('/test', function (req, res) {
    res.status(200).send({message: 'App working fine!'});
});


var authRoutes = require('./routes/auth-routes');
var blogRoutes = require('./routes/blog-routes');
var userRoutes = require('./routes/user-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressValidator());

app.use('/auth', authRoutes);
app.use('/blog', blogRoutes);
app.use('/user', userRoutes);


app.listen(port, (res) => {
    console.log(`App started at port :: ${port} !`);
});




