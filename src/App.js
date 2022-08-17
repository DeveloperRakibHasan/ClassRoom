import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';

function App() {
  return (
   <>
     <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Switch>
     </Router>
   </>
      
    
  );
}

export default App;
