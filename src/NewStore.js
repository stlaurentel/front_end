import React, { useState } from 'react';

export default function NewStore() {

    const [storeName, setStoreName] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setStoreName(event.target.value);
};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the API with the todo data
    fetch("http://localhost:3001/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(storeName),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Failed to post new todo');
      });
  };

  return (
    <div className="flex-container">
      <div className="">
        <form onSubmit={handleSubmit}>
        <label>
          <h3>Name:</h3>
          <input type="text" name="name" value={storeName} onChange={handleInputChange} />
        </label>
        <br />        
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
    
    </div>
  );
}