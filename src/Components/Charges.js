import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3, 2),
  },
}));

function createData(amount, type, transactionDate) {
  return { amount, type, transactionDate };
}

const rows = [
  createData(21.99, 'Fee', '1/2/19'),
  createData(2.99, 'Expense', '1/3/19'),
  createData(121.99, 'Deposit', '1/4/19'),
  createData(12.69, 'Fee', '1/5/19'),
];

export default function PaperSheet(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant='h6' color='primary'>CHARGE</Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Transaction Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell component="th" scope="row">$ {row.amount}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.transactionDate}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>

      <Paper className={classes.root}>
        <Toolbar>
          <Typography variant='h6' color='primary'>TOTALS BY TYPE</Typography>
        </Toolbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell component="th" scope="row">{row.type}</TableCell>
              <TableCell>$ {row.amount}</TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}