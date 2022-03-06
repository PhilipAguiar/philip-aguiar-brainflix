import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import Home from "./pages/Home/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={(routerProps) => <Home routerProps={routerProps} />} />
          <Route path="/upload" render={(routerProps) => <Upload routerProps={routerProps} />} />
          <Route path="/video/:id" render={(routerProps) => <Home routerProps={routerProps} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
