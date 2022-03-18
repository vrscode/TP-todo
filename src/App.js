import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import setHeader from './components/Header';
import InputForm from './components/Form';


function App() {
  return(
    <div className='body'>
      <h1>TodoList</h1>
      <InputForm />
    </div>
  );
}

export default App;

