import React from 'react';

export default class MortgageResult extends React.Component {
  render() {
    return (
      <div>
        Résultats.

        Coût du prêt : {this.props.cost}
      </div>
    );
  }
}
