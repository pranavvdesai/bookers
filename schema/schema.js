const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt} = graphql;


var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'},
];

var authors = [
    {name: 'Name', age: 1, id: '1'},
    {name: 'The', age: '1323232', id: '2'},
    {name: 'hi', age: 'Sci-Fi', id: '3'},
]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        // id: {type: graphql.GraphQLID},
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        pages: {type: GraphQLInt},
    
    
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
    
    
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
        },
        author : {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(authors, {id: args.id});
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