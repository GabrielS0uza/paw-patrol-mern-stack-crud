import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dogpage from "./components/DogPage";
import Logo from "./components/Logo";
import NoMatchPage from "./components/NoMatchPage";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = {
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '15px',
    color: 'sienna',
    "& span": {
      fontSize: '26px'
    },
    "&:hover": {
      "& svg": {
        fill: '#633200'
      },
      "& span": {
        color: '#633200',
      }
    },
    "& svg": {
      width: '65px',
      fill: 'sienna'
    }
  },
};

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        < CssBaseline />
        <Container maxWidth="xl" className="container">
          <h1><NavLink to="/"><div className={classes.logoWrapper}><Logo /><span>Paw Patrol</span></div></NavLink></h1>
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/dog/:id" component={Dogpage} />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

export default withStyles(useStyles)(Main);