import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";

import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1 className="text-5xl flex justify-center font-serif bg-green-400 ">
            Home
          </h1>
        </Link>
        <Switch>
          <Route exact path="/1" component={Page1} />
          <Route exact path="/2" component={Page2} />
          <Route exact path="/3" component={Page3} />
          <Route exact path="/4" component={Page4} />
          <Route exact path="/5" component={Page5} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
