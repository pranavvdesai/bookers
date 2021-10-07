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

function BookList() {
    return (
        
        <div>
            <ul id="book-list">
                <li>Book name</li>
            </ul>
        </div>
    )
}

// binds the query to the react component and returns props
export default graphql(getBooksQuery)(BookList)
