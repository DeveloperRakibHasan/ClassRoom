import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import TeacherProfile from './components/pages/TeacherProfile';

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
        <Route path="/techer_profile">
          <TeacherProfile />
        </Route>
      </Switch>
     </Router>
   </>
      
    
  );
}

export default App;
