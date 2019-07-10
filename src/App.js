import React from 'react';
import Appbar from './Components/Appbar.js';
import Form from './Components/Form';
import Charges from './Components/Charges';
import './App.css';


const App = () => {

  return (
    <div className="App">
      <Appbar />
      <Form />
      <Charges />
    </div>
  );
}

export default App;
