import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { AppStateContext } from '../providers/rootProvider';

export default function Dashboard(props) {
  const state = useContext(AppStateContext);
  return (
    <Grid container component="main" spacing={3} justify="space-between">
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Deposit
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Withdraw
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          View Balance
        </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          View Statement
        </Button>
      </Grid>
    </Grid>
  );
};
