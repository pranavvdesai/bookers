const graphql = require('graphql');

const {GrapQLObjectType, GraphQLString} = graphql;

const BookType = new GrapQLObjectType({
    name: 'Book',
    fields: () => ({
        // id: {type: graphql.GraphQLID},
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    
    
    })
})
