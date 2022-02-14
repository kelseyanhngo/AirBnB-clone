import { Route } from "react-router";
import { Switch } from "react-router-dom";
import "./App.css";
import Flexible from './Components/Flexible/flexible';
import Header from "./Components/Header/index";
import Home from "./Pages/Home";

function App() {

  return (
    <div className="App">
  
      <Switch>
      
        <Route path="/" component={Home} exact />

        <Route path="/header" component={Header} exact />
        <Route path="/flexible" component={Flexible} exact />

      </Switch>
    
    
    </div>
  );
}

export default App;
