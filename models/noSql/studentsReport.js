const moongoose = require('mongoose');

const studentsReport = new moongoose.Schema({
    knowledgeName: {
        type: String,
        required: true
    },
    totalStudentsKnowledge: {
        type: Number,
        required: true
    },
    studentsWithKnowledge: {
        type: Number,
        required: true
    },
    proportion: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('knowledgeReport', studentsReport);