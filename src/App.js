import './App.css';
import Header from './components/Header';
import RecommendedVideos from './components/RecommendedVideos';
import SideBar from './components/SideBar';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Switch>
          <Route exact path="/search/:searchTerm">
          <div className="app_sidebar">
              <SideBar/>
              <SearchPage/>
            </div>
          </Route>

          <Route exact path="/">
          <div className="app_sidebar">
              <SideBar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
