import React from 'react';
import MortgageParameters from './MortgageParameters';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export default class MortgageSimulator extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Simulateur de prêt"
        />
        <h1>Simulateur de prêt</h1>

        <MortgageParameters />
      </div>
    );
  }
}
