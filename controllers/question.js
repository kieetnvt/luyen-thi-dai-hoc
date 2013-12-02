var Question = app.model('question');

exports.addQuestions = function(req, res){
  var new_question = Question({
    id:1,
    question:"Glucozo có công thức hóa học là gì?",
    a:"C22H22O11",
    b:"C11H44O12",
    c:"C22H33O13",
    d:"C44H22O14",
    subject:"Hoa Hoc",
    right:{
      choose:"a",
      result:"C22H22O11"
    }
  });
  new_question.save();
  res.send("Added New Questions!")
};

exports.getQuestions = function(req, res){
  Question.find({}).exec(function(err, data){
    console.log(data);
    res.send(data);
  });
};