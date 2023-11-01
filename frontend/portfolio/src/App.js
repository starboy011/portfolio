import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/getName')  // Specify the full URL of your Go backend
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
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
