import {gql} from "@apollo/client"

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
const addBooksmutation = gql`
    mutation($name:String!,$genre:String!,$authorId:ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export {getAuthorsQuery, getBooksQuery, addBooksmutation, getBookQuery}