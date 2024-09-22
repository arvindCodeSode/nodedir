const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    name:String,
    email:String,
});
module.exports = mongoose.model('comment',commentSchema);