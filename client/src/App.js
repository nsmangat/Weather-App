import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.post('http://localhost:3001/weather', {
        city: 'Cambridge'
    })
    .then(response => {
        const data = response.data
        console.log(data)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
