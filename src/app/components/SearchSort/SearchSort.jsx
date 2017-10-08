import React from 'react';

import styles from './search-sort.css';

class SearchSort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'release date'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.onSelectSortBy(value);
  }

  render() {
    return (
      <div className = {styles.root}>
        <h4>Sort by</h4>
        <label className = {this.state.sortBy ==='release date' ? styles.active : ''}>
          release date
          <input type='radio'
                 name='sortBy'
                 value='release date'
                 onChange={this.handleInputChange}
                 checked={this.state.sortBy ==='release date'}/>
        </label>
        <label className = {this.state.sortBy ==='rating' ? styles.active : ''}>
          rating
          <input type='radio'
                 name='sortBy'
                 value='rating'
                 onChange={this.handleInputChange}
                 checked={this.state.sortBy ==='rating'} />
        </label>
      </div>
    );
  }

}

export default SearchSort;
