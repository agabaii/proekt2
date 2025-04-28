import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await api.get('/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    };
    loadNotes();
  }, []);

  const handleAddNote = async () => {
    if (!newNote.trim()) return;
    
    try {
      const response = await api.post('/notes', { content: newNote });
      setNotes([...notes, response.data]);
      setNewNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Notes</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter new note"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleAddNote} style={{ padding: '5px 10px' }}>
          Add Note
        </button>
      </div>
      <ul>
        {notes.map(note => (
          <li key={note.id} style={{ margin: '5px 0' }}>
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;