import React from 'react'
import {gql} from "@apollo/client"
import { graphql } from '@apollo/client/react/hoc';

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`


function AddBook({data}) {
    var displayAuthors = () => {
    if(data.loading) {
        return <div>Loading Authors...</div>
    } else {
        return (
                    data.authors.map(Author => (
                        <option key={Author.id} value={Author.id}>{Author.name}</option>
                    ))
        )
    }}
    return (

        <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select>
                        <option>Select author</option>
                        {displayAuthors()}
                    </select>
                </div>
                <button>+</button>

            </form>
    )
}

// binds the query to the react component and returns props
export default graphql(getAuthorsQuery)(AddBook)
