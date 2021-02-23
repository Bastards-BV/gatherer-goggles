import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ApolloProvider } from "@apollo/client";

import "antd/dist/antd.css";

import client from "./apolloClient";
import { PageNotFound, Home, ListOverview } from "./views";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ConfigProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/list/:id">
              <ListOverview />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </ConfigProvider>
    </ApolloProvider>
  );
}
