import React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import MovieDetailPage from "./pages/movie-detail/movie-detail.component";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/detail/:id' component={MovieDetailPage} />
      </Switch>
    </>
  );
}

export default App;
