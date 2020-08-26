import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    }
  }
});

class ErrorBoundary extends Component {
    constructor(props) {
    super(props);
    this.state = { hasError: false };
}

componentDidCatch(error, info) {
    this.setState({ hasError: true });
}

render() {
    const { classes } = this.props;
    if (this.state.hasError) {
        return (
          <div className={classes.root}>
            <Alert severity="error">
              Oops! Something went wrong.
            </Alert>
          </div>
          )
    } else {
        return this.props.children;
        }
    }
} 

export default withStyles(useStyles)(ErrorBoundary)
