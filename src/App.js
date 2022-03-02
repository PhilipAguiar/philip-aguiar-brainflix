import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload";
import ActiveVideo from "./components/ActiveVideo/ActiveVideo";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/upload" render={() => <Upload />} />
          <Route path="/video:id" render={() => <ActiveVideo />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
