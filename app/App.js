import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MortgageSimulator from './components/MortgageSimulator';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <MortgageSimulator />
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
