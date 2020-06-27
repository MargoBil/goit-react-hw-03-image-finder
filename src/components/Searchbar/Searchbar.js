import React, {Component} from 'react';

class Searchbar extends Component {
  state ={
    inputValue : ''
  }

  hadleInput = ({target}) => {
    this.setState({inputValue: target.value})
  }

  hadleSubmit = (e) => {
    e.preventDefault();
    const{onSubmit} = this.props;
    const{inputValue} = this.state
    onSubmit(inputValue);
  }

  render () {
    return (
      <header className="Searchbar">
        <form onSubmit={this.hadleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hadleInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
