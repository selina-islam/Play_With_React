import React, { useState, useReducer } from "react";

// initial book list
const bookList = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "JavaScript made easy" },
  { id: 3, name: "Marhaba JavaScript" },
];

// modal component
const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD") {
    const allbooks = [...state.book, action.payload];
    return {
      ...state,
      book: allbooks,
      isModalOpen: true,
      modalText: "book is added",
    };
  }

  if (action.type === "REMOVE") {
    const filterBook = state.book.filter((book) => book.id !== action.payload);
    return {
      ...state,
      book: filterBook, // correct book key
      isModalOpen: true,
      modalText: "book is removed",
    };
  }

  return state;
};

// main component
const Example = () => {
  // useReducer to manage book state
  const [bookState, dispatch] = useReducer(reducer, {
    book: bookList,
    isModalOpen: false,
    modalText: "",
  });

  // state to hold input value
  const [bookName, setBookName] = useState("");

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  // remove book from list
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3>book list</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">add book</button>
      </form>

      {/* show modal if open */}
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {/* display books */}
      <ul>
        {bookState.book.map((bookItem) => {
          const { id, name } = bookItem;
          return (
            <li key={id}>
              {name} <button onClick={() => removeBook(id)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Example;
