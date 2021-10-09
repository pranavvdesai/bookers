import React from 'react'
import { graphql } from '@apollo/client/react/hoc';
import {getBooksQuery} from '../../queries/queries';
import BookDeets from './BookDeets';


function BookList({data}) {

    const [selected, setSelected] = React.useState(null);

    var displayBooks = () => {
    if(data.loading) {
        return <div>Loading books...</div>
    } else {
        return (
            <div>
                <ul>
                    {data.books.map(book => (
                        <li key={book.id} onClick={(e)=>{setSelected(book.id)}}>{book.name}</li>
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
            <BookDeets bookId={selected} />
        </div>
    )
}

// binds the query to the react component and returns props
export default graphql(getBooksQuery)(BookList)
