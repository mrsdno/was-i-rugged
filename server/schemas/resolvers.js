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
        },
        deleteProject: async (parent, { _id } ) => {
            const project = await Project.deleteOne({ _id });

            return ( project )
        }
    }
}

module.exports = resolvers;