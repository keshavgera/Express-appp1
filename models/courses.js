const mongoose = require("mongoose");

const Course = mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    content:{
        type: String,
        require: true,
    },
    videos:{
        type: Number,
        require: true,
    },
    active:{
        type: Boolean,
        require: true,
    }
});


module.exports = mongoose.model("courses", Course)
