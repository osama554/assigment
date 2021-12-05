import './App.css';
import Home from './Components/Home';
import Form from './Components/Form';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
 return (
  <Router>
   <Switch>
    <Route exact path="/" render={(props) => <Home {...props} />} />
    <Route exact path="/form" render={(props) => <Form {...props} />} />
   </Switch>
  </Router>
 );
}

export default App;
