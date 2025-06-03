import React, { useState } from 'react';

// initial book list
const bookList = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'JavaScript made easy' },
  { id: 3, name: 'Marhaba JavaScript' },
];

// modal component
const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const IndexReducer = () => {
  // state to hold book list
  const [book, setBook] = useState(bookList);

  // state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // state for modal text
  const [modalText, setModalText] = useState('');

  // state for input value
  const [bookName, setBookName] = useState('');

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime().toString(),
      name: bookName,
    };

    // update book list
    setBook((prev) => [...prev, newBook]);

    // show modal
    setIsModalOpen(true);
    setModalText('book is added');

    // clear input
    setBookName('');
  };

  return (
    <div>
      <h3>book list</h3>

      {/* form to add new book */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <button type="submit">add book</button>
      </form>

      {/* show modal if open */}
      {isModalOpen && <Modal modalText={modalText} />}

      {/* render book list */}
      <ul>
        {book.map((bookItem) => {
          const { id, name } = bookItem;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default IndexReducer;
