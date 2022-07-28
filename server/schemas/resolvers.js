const { Project } = require('../models')

const resolvers = {
    Query: {
        projects: async () => {
            return await Project.find({})
        },
    }
}

module.exports = resolvers;