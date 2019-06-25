import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  button: {
    margin: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <ThemeProvider>
        <TextField
          className={classes.margin}
          label="Charge Amount"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <TextField
          className={classes.margin}
          label="Charge Type"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <TextField
          className={classes.margin}
          label="Transaction Date"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
        <Button variant="outlined" color="primary" className={classes.button}>
        Submit
      </Button>
      </ThemeProvider>
    </form>
  );
}