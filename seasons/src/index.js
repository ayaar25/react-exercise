import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Direct assignment in state is only in initialize
    this.state = { lat: null, errorMessage: '' };
  }

  // Another way of initialiazing state
  // This initializationi will be changed into the constructor way initialization with babel
  //state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // Helper method
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div><SeasonDisplay lat={this.state.lat}/></div>
    }
    
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <Spinner />
  }

  // Render is a must!
  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)