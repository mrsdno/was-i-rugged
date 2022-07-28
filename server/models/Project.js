const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    name: {
        type: String,
    },
    picture: {
        type: String,
    },
    twitter: {
        type: String,
    },
    discord: {
        type: String,
    },
    status: {
        type: String,
    }
});

const Project = model('Project', projectSchema);

module.exports = Project;