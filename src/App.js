import React, { useEffect, useState } from 'react';
import './App.css';
import ContactCard from './ContactCard';
const App = () => {
const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json()
    .then(data => setResults(data.results)))
  }, []);

  return(
      <div className='app'>
        <h1>Contacts List</h1>
        {results.map((result, index) => {
          return(
            <ContactCard key={index}
              avatarUrl= {result.picture.large}
              name= {result.name.first}
              email= {result.email}
              age= {result.dob.age}
            />
          )
        })}
      </div>

  )
}

export default App;