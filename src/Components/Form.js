import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Rows from './row';
import '../App.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      data: [],
      amount: '',
      type:'',
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const info = {
      amount: parseFloat(this.state.amount,10), 
      type: this.state.type, 
      date:this.state.date.toLocaleDateString()
    };
    const data = [...this.state.data, info];
    this.setState({
      data: data,
      amount:'',
      type:''
    });
  };

  render() {
    return(
      <div>
        <h2>Today's Date is {this.state.date.toLocaleDateString()}.</h2>
        <form>
          <TextField
            value={this.state.amount}
            onChange={evt => this.setState({amount: evt.target.value})}
            placeholder="Amount"
          />
          <TextField
            value={this.state.type} 
            onChange={evt => this.setState({type: evt.target.value})}
            placeholder="Type"
          />
          <Button
            onClick={this.onSubmit}>Submit</Button>
        </form>

        <Paper className='Paper'>
          <Toolbar>
            <Typography variant='h6' color='primary'>CHARGE</Typography>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((info) => 
                <Rows amount={info.amount} type={info.type} date={info.date}/>
              )}
            </TableBody>
          </Table>
        </Paper>

        <Paper className='Paper'>
          <Toolbar>
            <Typography variant='h6' color='primary'>TOTALS BY TYPE</Typography>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Rows 
                amount={this.state.data.filter(info => info.type.toLowerCase() === 'fee').reduce((total, info) => {
                  return total += info.amount
                }, 0)} 
                type='Fee'
              />
              <Rows 
                amount={this.state.data.filter(info => info.type.toLowerCase() === 'deposit').reduce((total, info) => {
                  return total += info.amount
                }, 0)} 
                type='Deposit'
              />
              <Rows 
                amount={this.state.data.filter(info => info.type.toLowerCase() === 'expense').reduce((total, info) => {
                  return total += info.amount
                }, 0)} 
                type='Expense'
              />
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default Form;