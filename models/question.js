var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    modelName = 'Question';

var schema = new Schema({
  id: {type:String, require:true},
  question:{type:String, require:true},
  a: {type:String, require:false},
  b: {type:String, require:false},
  c: {type:String, require:false},
  d: {type:String, require:false},
  subject:{type:String, require:true},
  right: {
    choose:{type:String, require:true},
    result:{type:String, require:true}
  }
});

exports = module.exports = mongoose.model(modelName, schema);