const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("tasks", taskSchema);