import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Rows from './row';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      data: [],
      amount: '',
      type:''
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const info = {
      amount: this.state.amount, 
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
        <div>
          {this.state.data.map((info) => 
            <Rows amount={info.amount} type={info.type} date={info.date}/>
          )}
        </div>
      </div>
    );
  }
}
export default Form;












// onChange = (event) => {
//   this.setState({
//     [event.target.name]: event.target.value
//   });
// }

// const useStyles = makeStyles(theme => ({
//   main: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-end',
//   },
//   button: {
//     margin: theme.spacing(2),
//   },
//   margin: {
//     margin: theme.spacing(2),
//   }
// }));

// function createData(amount, type, transactionDate) {
//   return { amount, type, transactionDate };
// }


// const rows = [
//   createData(21.99, 'Fee', '1/2/19'),
//   createData(2.99, 'Expense', '1/3/19'),
//   createData(121.99, 'Deposit', '1/4/19'),
//   createData(12.69, 'Fee', '1/5/19'),
// ];

// export default function CustomizedInputs() {
//   const classes = useStyles();

//   return (
    // <div className={classes.root}>
    //   <ThemeProvider>
    //     <TextField
    //       className={classes.margin}
    //       label="Charge Amount"
    //       variant="outlined"
    //       id="mui-theme-provider-outlined-input"
    //     />
    //     <TextField
    //       className={classes.margin}
    //       label="Charge Type"
    //       variant="outlined"
    //       id="mui-theme-provider-outlined-input"
    //     />
    //     <TextField
    //       className={classes.margin}
    //       label="Transaction Date"
    //       variant="outlined"
    //       id="mui-theme-provider-outlined-input"
    //     />
    //     <Button variant="outlined" color="primary" className={classes.button}>
    //       Submit
    //     </Button>
    //   </ThemeProvider>
    // </div>
//   );
// }