import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import "./App.scss";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Create from "./pages/create";
import Dashboard from "./pages/dashboard";
import Sell from "./pages/sell";
import P2P from "./pages/P2PMarketplace";
import AssetSell from "./pages/assetSell";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />

        <Sidebar />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className="content_container">
            <Header />

            <Switch>
              <Route path="/create" render={(props) => <Create {...props} />} />
            </Switch>
            <Switch>
              <Route path="/sell" render={(props) => <Sell {...props} />} />
            </Switch>
            <Switch>
              <Route
                path="/assetsell"
                render={(props) => <AssetSell {...props} />}
              />
            </Switch>
            <Switch>
              <Route
                path="/p2pmarketplace"
                render={(props) => <P2P {...props} />}
              />
            </Switch>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Dashboard {...props} />}
              />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
