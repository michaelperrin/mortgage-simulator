import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField'

export default class MortgageParameters extends React.Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Montant emprunté"
          floatingLabelText="Montant emprunté"
          type="number"
          value={this.props.amount}
          onChange={this.props.onAmountChange}
        />

        <TextField
          hintText="Nombre de mois"
          floatingLabelText="Durée du prêt"
          type="number"
          value={this.props.length}
          onChange={this.props.onLengthChange}
        />

        <TextField
          hintText="Taux"
          floatingLabelText="Taux"
          type="number"
          value={this.props.rate}
          onChange={this.props.onRateChange}
        />
      </div>
    );
  }
}

MortgageParameters.propTypes = {
  'amount': PropTypes.number,
  'onAmountChange': PropTypes.func.isRequired,
  'length': PropTypes.number,
  'onLengthChange': PropTypes.func.isRequired,
  'rate': PropTypes.number,
  'onRateChange': PropTypes.func.isRequired
}

MortgageParameters.defaultProps = {
  'amount': '',
  'length': '',
  'rate': ''
}
