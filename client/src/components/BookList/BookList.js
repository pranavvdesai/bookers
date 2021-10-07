import React from 'react'
import {gql} from "@apollo/client"
import { graphql } from '@apollo/client/react/hoc';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

function BookList({data}) {
    var displayBooks = () => {
    if(data.loading) {
        return <div>Loading books...</div>
    } else {
        return (
            <div>
                <ul>
                    {data.books.map(book => (
                        <li key={book.id}>{book.name}</li>
                    ))}
                </ul>
            </div>
        )
    }}
    return (

        <div>
            <ul id="book-list">
            <li>Books list</li>

                {displayBooks()}
            </ul>
        </div>
    )
}

// binds the query to the react component and returns props
export default graphql(getBooksQuery)(BookList)
