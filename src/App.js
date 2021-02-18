import React from "react" ;
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/home.js";
import Result from "./routes/result.js";


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/result"  component={Result} />
    </HashRouter>
  );
}

export default App;
