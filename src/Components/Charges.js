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
import Rows from './row';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3, 2),
  },
}));

const Charges = (props) => {
  const classes = useStyles();

  return(
    <Paper className={classes.root}>
    <Toolbar>
      <Typography variant='h6' color='primary'>CHARGE</Typography>
    </Toolbar>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Amount</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <Rows />
      </TableBody>
    </Table>
  </Paper>
  );
}

export default Charges;


















// const useStyles = makeStyles(theme => ({
//   root: {
//     margin: theme.spacing(2),
//     marginBottom: theme.spacing(4),
//     padding: theme.spacing(3, 2),
//   },
// }));

// export default function PaperSheet(props) {
//   const classes = useStyles();

//   return (
//     <div>
      // <Paper className={classes.root}>
      //   <Toolbar>
      //     <Typography variant='h6' color='primary'>CHARGE</Typography>
      //   </Toolbar>
      //   <Table className={classes.table}>
      //     <TableHead>
      //       <TableRow>
      //         <TableCell>Amount</TableCell>
      //         <TableCell>Type</TableCell>
      //         <TableCell>Transaction Date</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       <TableRow>
      //         <TableCell component="th" scope="row">$ {props.amount}</TableCell>
      //         <TableCell>{props.type}</TableCell>
      //         <TableCell>{props.date}</TableCell>
      //       </TableRow>
      //     </TableBody>
      //   </Table>
      // </Paper>
//     </div>
//   );
// }