import React from 'react';
import Todo from './components/Todo';
import './App.css';

const App = () => {



  useEffect(() => {
    fetch("https://todo2-2kl5.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);
  return (
    <div className="App">
      <Todo />
    </div>
  );
};

export default App;
