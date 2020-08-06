import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import { HashRouter, Route } from 'react-router-dom'
import Finished from './components/Finished';
import TopMenu from './components/Menu'
import { Spin } from 'antd';
import { connect } from 'react-redux';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HashRouter>
            <Spin spinning = {this.props.loading} >
              <TopMenu />
              <Route exact path="/" component={ToDoList}></Route>
              <Route path="/finished" component={Finished}></Route>
            </Spin>
          </HashRouter>
        </header>
      </div>
    );
  }
  }
  
const mapStateToProps = state => {
  return { loading: state.loading }
};

export default connect(mapStateToProps)(App);

//export default App;
