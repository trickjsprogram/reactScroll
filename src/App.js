import "./App.css";
import { Switch, Route } from "react-router-dom";
import Headers from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import GoTop from "./component/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Headers />
      <GoTop scrollStepInPx="50" delayInMs="30" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
