import React, {useCallback, useMemo, useState} from 'react';


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JavaScript', 'TypeScript', 'React', 'Angular'])


    /*const memoizedAddBook1 = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Internet' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])*/
    //чтобы не писать такой сложный useMemo - можно применить useCallback

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Internet' + new Date().getTime()]
            setBooks(newBooks)
        }, [books])

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <Books addBook={memoizedAddBook2}/>
        </div>
    );
};

type BookType = {
    addBook: () => void
}

const Books = React.memo(function Books(props: BookType) {

    console.log('BOOKS')
    return (
        <div>
            <button onClick={() => props.addBook()}>ADD BOOK</button>
        </div>
    )
});