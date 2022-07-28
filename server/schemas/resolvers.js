const { Project } = require('../models')

const resolvers = {
    Query: {
        projects: async () => {
            return await Project.find({})
        },
    },

    Mutation: {
        addProject: async (parent, args, context) => {
            const project = await Project.create(args);

            return { project };
        }
    }
}

module.exports = resolvers;