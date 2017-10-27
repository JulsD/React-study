import React from 'react';

import styles from './search-sort.css';

class SearchSort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'release_date'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });

    this.props.onSelectSortBy(value);
  }

  render() {
    return (
      <div className = {styles.root}>
        <h4>Sort by</h4>
        <label className = {this.state.sortBy ==='release_date' ? styles.active : ''}>
          release date
          <input type='radio'
                 name='sortBy'
                 value='release date'
                 onChange={this.handleInputChange}
                 checked={this.state.sortBy ==='release_date'}/>
        </label>
        <label className = {this.state.sortBy ==='vote_average' ? styles.active : ''}>
          rating
          <input type='radio'
                 name='sortBy'
                 value='vote_average'
                 onChange={this.handleInputChange}
                 checked={this.state.sortBy ==='vote_average'} />
        </label>
      </div>
    );
  }

}

export default SearchSort;
