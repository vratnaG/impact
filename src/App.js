import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./component/Home"
import Candidate from "./component/Candidate"
import Select from "./component/Select"
import Reject from "./component/Reject"
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/candidate_info/:id" component={Candidate} />
          <Route path="/shortlisted" component={Select} />
          <Route path="/rejected" component={Reject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
