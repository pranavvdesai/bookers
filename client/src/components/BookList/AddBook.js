import React from 'react'
import { graphql } from '@apollo/client/react/hoc';
import {getAuthorsQuery} from '../../queries/queries';
import {addBooksmutation} from '../../queries/queries';
import {flowRight as compose} from 'lodash';
import {getBooksQuery} from '../../queries/queries';


function AddBook(/*{data}*/ {getAuthorsQuery, addBooksmutation}) {

    const [name, setName] = React.useState('');
    const [genre, setGenre] = React.useState('');
    const [authorId, setAuthorId] = React.useState('');

    const SubmitForm = (e) => {
        e.preventDefault();
        addBooksmutation({
            variables: {
                name,
                genre,
                authorId
            },
            // array of different queries to fetch
            refetchQueries: [{query: getBooksQuery}]
        })
    }

    
    var displayAuthors = () => {
    if(getAuthorsQuery.loading) {
        return <div>Loading Authors...</div>
    } else {
        return (
                    getAuthorsQuery.authors.map(Author => (
                        <option key={Author.id} value={Author.id}>{Author.name}</option>
                    ))
        )
    }}
    return (

        <form id="add-book" onSubmit={SubmitForm} >
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e)=>setGenre(e.target.value)}  />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e)=>{setAuthorId(e.target.value)}}>
                        <option>Select author</option>
                        {displayAuthors()}
                    </select>
                </div>
                <button>+</button>

            </form>
    )
}

// binds the query to the react component and returns props
// export default graphql(getAuthorsQuery)(AddBook)


export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBooksmutation, {name: "addBooksmutation"})
)(AddBook)