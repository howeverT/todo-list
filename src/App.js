import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'
import { HashRouter, Route } from 'react-router-dom'
import Finished from './components/Finished';
import TopMenu from './components/Menu'
import { Row, Col } from 'antd';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
              <TopMenu></TopMenu>
              <Route exact path="/" component={ToDoList}></Route>
              <Route path="/finished" component={Finished}></Route>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
