var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContestSchema = new Schema({
    name: String,
    problems: [{ type: Schema.Types.ObjectId, ref: 'Problem' }]
});

module.exports = mongoose.model('Contest', ContestSchema);
