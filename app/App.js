import React from 'react';
import ReactDOM from 'react-dom';

class MortgageSimulator extends React.Component {
  render() {
    return (
      <div>
        <h1>Simulateur de prêt</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <MortgageSimulator />,
  document.getElementById('root')
);
