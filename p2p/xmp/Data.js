


var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  username: String,
 password: String
});
// Compile model from schema
var SomeModel = mongoose.model('somemodels', SomeModelSchema );
module.exports=SomeModel;