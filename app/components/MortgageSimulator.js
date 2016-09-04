import React from 'react';
import MortgageParameters from './MortgageParameters';
import MortgageResult from './MortgageResult';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import update from 'react-addons-update';

export default class MortgageSimulator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'mortgage': {
        'parameters': {
          'amount': null,
          'length': null,
          'rate': null
        },
        'result': {
          'cost': 0
        }
      }
    }

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
  }

  handleAmountChange(event) {
    let value = parseInt(event.target.value, 10);

    if (!isNaN(value)) {
      this.updateMortgageParameterValue('amount', value);
    }
  }

  handleLengthChange(event) {
    let value = parseInt(event.target.value, 10);

    if (!isNaN(value)) {
      this.updateMortgageParameterValue('length', value);
    }
  }

  handleRateChange(event) {
    let value = parseFloat(event.target.value);

    if (!isNaN(value)) {
      this.updateMortgageParameterValue('rate', value);
    }
  }

  updateMortgageParameterValue(parameter, value) {
    // Love ES6 dynamic parameters with brakets :)
    let updateData = {
      mortgage: {
        parameters: {
          [parameter]: {
            $set: value
          }
        }
      }
    };

    let newState = update(this.state, updateData);

    this.setState(newState, this.updateMortgage);
  }

  updateMortgage() {
    let cost = 0;
    let leftAmount = this.state.mortgage.parameters.amount;
    let rate = this.state.mortgage.parameters.rate;
    let length = this.state.mortgage.parameters.length;
    let amountPerMonth = this.state.mortgage.parameters.amount / length;
    let nbYear = length / 12;
    let amountPerYear = this.state.mortgage.parameters.amount / nbYear;

    console.log(leftAmount, nbYear, amountPerYear);

    for (var i = 1; i <= nbYear; i++) {
      cost += leftAmount * (rate / 100);
      leftAmount -= amountPerYear;
    }

    console.log(cost);

    let newState = update(
      this.state,
      {
        mortgage: {
          result: {
            'cost': {
              $set: cost
            }
          }
        }
      }
    );

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <AppBar
          title="Simulateur de prêt"
        />

        <MortgageParameters
          amount={this.state.mortgage.parameters.amount}
          onAmountChange={this.handleAmountChange}
          length={this.state.mortgage.parameters.length}
          onLengthChange={this.handleLengthChange}
          rate={this.state.mortgage.parameters.rate}
          onRateChange={this.handleRateChange}
        />

        {JSON.stringify(this.state.mortgage.result)}

        <MortgageResult cost={this.state.mortgage.result.cost} />
      </div>
    );
  }
}
