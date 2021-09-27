const graphql = require('graphql');

const {GrapQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const BookType = new GrapQLObjectType({
    name: 'Book',
    fields: () => ({
        // id: {type: graphql.GraphQLID},
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    
    
    })
})

const RootQuery = new GrapQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // code to get data from db / other source
                return {
                    id: '123',
                    name: 'Harry Potter',
                    genre: 'Fantasy'
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});