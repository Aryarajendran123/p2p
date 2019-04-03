let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
let app = express();
let expressValidator=require('express-validator');
let expressSession=require('express-session');
let apiRoutes = require("./api-routes")
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());
const dbRoute = "mongodb+srv://arya_rajendran:Arya123@cluster0-0ermz.mongodb.net/test?retryWrites=true";
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);
var db = mongoose.connection;
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use(expressSession({secret :'max', saveUninitialized: false, resave:false}));
app.use('/api', apiRoutes)
app.listen(port, function () {
console.log("Running p2p on port " + port);
});