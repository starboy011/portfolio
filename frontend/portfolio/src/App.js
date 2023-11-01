import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/getName',{
      headers: {
        'If-None-Match': 'no-match', // Unlikely value
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data:', data); // Add this line for debugging
        setName(data.name);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Name: {name}</h1>
    </div>
  );
}
export default App;
