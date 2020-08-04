import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'
import {HashRouter,Route} from 'react-router-dom'
import Finished from './components/Finished';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <HashRouter>
          <Menu></Menu>
           <Route exact path="/" component={ToDoList}></Route>
           <Route path="/finished" component={Finished}></Route>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
