import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList'
import { HashRouter, Route } from 'react-router-dom'
import Finished from './components/Finished';
import TopMenu from './components/Menu'
import { Spin } from 'antd';
import store from './redux/store'
import { connect } from 'react-redux';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Spin spinning = {store.getState().loading} >
            <TopMenu></TopMenu>
            <Route exact path="/" component={ToDoList}></Route>
            <Route path="/finished" component={Finished}></Route>
          </Spin>
        </HashRouter>
      </header>
    </div>
  );
}
const mapStateToProps = state => {
  return { loading: state.loading }
};

export default connect(mapStateToProps)(App);

//export default App;
