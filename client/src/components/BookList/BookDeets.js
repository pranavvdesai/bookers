import React from 'react'
import { graphql } from '@apollo/client/react/hoc';
// import {getBooksQuery} from '../../queries/queries';
import {getBookQuery} from '../../queries/queries';

function BookDeets({data}) {
    // const {book} = data
    console.log(data);
    var displayBook = () => {
        console.log(data);
        if(data.book){
            return (
                <div> 
                    <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All books by this author</p>
                    <ul className="other-books">
                        {data.book.author.books.map(book => {
                            return <li key={book.id}>{book.name}</li>
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>No book selected...</div>
            )
        }
    }

    return (

        <div id="book-details">
            <p>Output book details here</p>
            {displayBook()}
        </div>
    )
}

// binds the query to the react component and returns props
export default graphql(getBookQuery,{
    // passing bookid as a prop fromn booklist
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDeets);
