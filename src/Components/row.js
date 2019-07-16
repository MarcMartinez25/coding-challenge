import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const Rows = (props) => {
  return(
    <TableRow>
      <TableCell component="th" scope="row">$ {props.amount}</TableCell>
      <TableCell>{props.type}</TableCell>
      <TableCell>{props.date}</TableCell>
    </TableRow>
  );
}

export default Rows;