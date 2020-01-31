import React from 'react';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import {Provider} from 'react-redux';
import store from './ducks/store';
import {HashRouter} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">

          <Nav/>
          {routes}
          
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
