
import './App.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function App() {

  const URL = ("https://jsonplaceholder.typicode.com/posts/9");
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);


  useEffect(() => {
    async function API() {
      const response = await axios.get(URL);
      setTitle(response.data.title);
      setBody(response.data.body);
    }
    API();
  }, [title])



  return (
    <div>
      <h2>{title}</h2>
      <h3>{body}</h3>
    </div>
  );
}


export default App;
