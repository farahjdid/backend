const express = require('express');
const mongoose = require('./config/connect.js');
var cors = require('cors')

const reservationRoute = require('./routes/reservation.js');
const userRoute = require('./routes/user.js');


require('./config/connect');

const app = express();
app.use(express.json());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use( '/reservation' , reservationRoute);
app.use( '/user' , userRoute);
app.use(cors(corsOptions))


app.listen( 3000 , ()=>{
    console.log('server work');
})