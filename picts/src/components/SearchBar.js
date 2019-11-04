import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // If this error occurs: TypeError: Cannot read property 'state' of undefined
  // use arrow function (babel will automatically bind the function in constructor)
  // another solution is to write arrow function directly on callback onSubmit
  // onSubmit = {(e) => this.onFormSubmit(e)}
  onFormSubmit = (event) =>{
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }

  // not passing function directly for input on change
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;