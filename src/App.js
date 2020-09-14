import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home/Home";
import FormCreate from "./components/posts/FormCreate";
import FormEdit from "./components/posts/FormEdit";
import PostDetail from "./views/postDetail/PostDetail";
import NoMatch from "./views/noMatch/NoMatch";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/new" component={FormCreate} />
        <Route path="/post/:id/edit" exact component={FormEdit} />
        <Route path="/post/detail/:id" exact component={PostDetail} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
