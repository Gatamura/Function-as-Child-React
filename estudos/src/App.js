import React, { Component, Fragment} from 'react';
import logo from './logo.svg';
import FunctionAsChild from './functionAsChild'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionAsChild render={(data) => (
          <Fragment>
            <div>{data.nome}</div>
            <div>{data.sobrenome}</div>
            <div>{data.idade}</div>
          </Fragment>
      )} />
      </div>
    );
  }
}

export default App;
