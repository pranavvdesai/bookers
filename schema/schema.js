const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql;


var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'},
];


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        // id: {type: graphql.GraphQLID},
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        pages: {type: GraphQLString},
    
    
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        // id: {type: graphql.GraphQLID},
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLString},
        pages: {type: GraphQLString},
    
    
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID }},
            resolve(parent, args){
                // code to get data from db / other source
               return _.find(books, {id: args.id});
                
            }
        }
    }
})

//  book(id:"2"){
//     name
//     genre
// }



module.exports = new GraphQLSchema({
    query: RootQuery
});