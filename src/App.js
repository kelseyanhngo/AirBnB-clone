import { useEffect } from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/index";
import Header1 from "./Components/Header1/header1";
import Home from "./Pages/Home";
import Flexible from './Components/Flexible/flexible';

function App() {

  return (
    <div className="App">
      {/* <Header/>
    <Header1/> */}
      <Switch>
      
        <Route path="/" component={Home} exact />

        <Route path="/header" component={Header} exact />
        <Route path="/header1" component={Header1} exact />
        <Route path="/flexible" component={Flexible} exact />

      </Switch>
    
    
    </div>
  );
}

export default App;
