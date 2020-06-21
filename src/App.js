import React from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

import Sidebar from "./components/Sidebar";
import { core } from "./components/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const { Container, Grid, createStyles, makeStyles } = core;

const padding = 10;

const useStyles = makeStyles((theme) => {
  return createStyles({
    "@global": {
      body: {
        backgroundColor: "#ecf0f1",
      },
    },
    sidebar: {
      backgroundColor: "#F2F3F7",
      padding,
    },
    content: {
      backgroundColor: "#FAFAFA",
      padding,
    },
  });
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={3} className={classes.sidebar}>
            <Sidebar />
          </Grid>
          <Grid item xs={9} className={classes.content}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
