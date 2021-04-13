
import './App.css';
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search.js";
import Wrapper from "./components/Wrapper/Wrapper.js";



    function App() {
      return (
        <Router>
          <div>
            <Wrapper>
              <Route exact path="/" component={Search} />
            </Wrapper>
          </div>
        </Router>
      );
    }

export default App;
