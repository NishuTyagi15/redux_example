import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import TotalStudents from './pages/TotalStudents';
import GirlsStudents from './pages/Students';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/girlsStudents" component={GirlsStudents} />
          <Route exact path="/" component={TotalStudents} />
        </Switch>
      </Router>
    </div>
  )
}

export default App