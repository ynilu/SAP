var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProblemSchema = new Schema({
    number1: Number,
    number2: Number,
    operator: String
});


ProblemSchema.methods.answer = function () {
    if(this.operator == '+')
        return this.number1 + this.number2;
    if(this.operator == '-')
        return this.number1 - this.number2;
    throw "Unknow Operator";
};

var Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;
