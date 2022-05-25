import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css'

import AllPosts from './allPosts'
import {store} from './store/index'

function App() {
  
  return (
    <div className="App">
      <div className="container-fluid">
      <Provider store={store}>
        <Router >
          <Routes>
            <Route path='/' exact element={<AllPosts />} />
            {/* <Route path='/addPost' exact element={<AddPost />} />
            <Route path='/editPost/:id' exact element={<AddPost />} /> */}
          </Routes>
        </Router>
      </Provider>
      </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("app"));

