import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import styles from '../styles/signInStyle';
import Service from '../services/signIn.js';
import Action from '../actions/signInActions';
import { AppStateContext, AppDispatchProvider, AppDispatchContext } from '../providers/rootProvider.js';

const useStyles = makeStyles(styles);

export default function SignIn(props) {

  const state = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    Service.signIn(JSON.stringify({email, password}))
      .then((response) => {
        const data = response.data;
        if (data) {
          dispatch(Action.setAuthStatus(true));
          dispatch(Action.setCurrentUser(data.user));
        }
      })
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  }

  if (state.root.isAuthenticated) {
    return(
      <Redirect to="/dashboards" />
    )
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={onSubmit}
          >
            <input
              type="hidden"
              value={props.token}
              name="authenticity_token"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="User ID"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e=> setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e=> setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
