import React, { useState } from 'react';
import './Notepad.css';

const Notepad = () => {
  const [input, setInput] = useState('');
  const [note, setNote] = useState([]);
  const [editIndex, setEditIndex] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === 0) {
      setNote([...note, input]);
    } else {
      const updatedNote = [...note];
      updatedNote[editIndex] = input;
      setNote(updatedNote);
      setEditIndex(0);
    }

    setInput('');
  };

  const handleEdit = (index) => {
    setInput(note[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedNote = [...note];
    updatedNote.splice(index, 1);
    setNote(updatedNote);
  };

  return (
    <div className='notepad-container'>
      <h1 className='notepad-heading'>Notepad</h1>
      <form className='notepad-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a note...'
          value={input}
          onChange={handleInputChange}
          className='notepad-input'
        />
        <button type='submit' className='notepad-button'>
          {editIndex === 0 ? 'Add' : 'Save'}
        </button>
      </form>
      {note.length > 0 ? (
        <ul className='notepad-list'>
          {note.map((n, index) => (
            <li key={index} className='notepad-item'>
              <div className='notepad-text'>{n}</div>
              <div className='notepad-buttons'>
                <button
                  className='notepad-edit-button'
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className='notepad-delete-button'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='notepad-empty'>No notes yet.</div>
      )}
    </div>
  );
};

export default Notepad;
