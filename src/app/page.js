'use client';

import React, { useState } from 'react';
import ListCard from '../components/ListCard';

function Home() {
  const [newItem, setnewItem] = useState('');

  const toDoList = ['test 1', 'test 2 ', 'test 3 ', 'test 4 '];

  const addNewItem = (val) => {
    setnewItem(val);
    toDoList.push(newItem);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {toDoList.map((item) => (
        <ListCard item={item} />
      ))}
      <input type="text" id="text" placeholder="new task" />
      <button type="submit" onClick={addNewItem}>
        Add Task
      </button>
    </div>
  );
}

export default Home;
