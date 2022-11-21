// import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Router, Switch } from 'react-router-dom';
import Chatpage from './Pages/Chatpage';
import Gateentry from './components/Gate-entry/GateEntry';
import Homeowner from './components/Home-owner-entry/Homeowner';
import Directory from './components/Directories/Directories';
import Landing from './components/Landing/landing';
import Maintenance from './components/Maintenance/maintenace';
import Navbar from './components/Maintenance/NavBar';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router>
        <Switch> */}
      <Route path="/landing" component={Landing} exact />
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/directories" component={Directory} />
      <Route path="/pay-maintenance" component={Maintenance} />
      <Route path="/gate-entry" component={Gateentry} />
      <Route path="/home-owner-entry" component={Homeowner} />
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
