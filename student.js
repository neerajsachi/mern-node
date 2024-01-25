const display = () => {
    console.log("Student details");
};

const getDetails = () => {
    console.log("details");
}
module.exports = {display,getDetails};


taskController.js



const Task = require("../models/tasks");

const createTask =async (req, res) => {
    const result = await Task.create(req.body);
    res.status(200).json(result);
};

module.exports = {createTask};


