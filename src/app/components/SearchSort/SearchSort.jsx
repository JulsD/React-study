import React from 'react';
import { connect } from 'react-redux'
import { setSort } from '../../action/sort'

import styles from './search-sort.css';

class SearchSort extends React.Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;

    if (value == 'release date') {
      value = 'release_year';
    }

    this.props.setSort(value);
  }

  render() {
    return (
      <div className = {styles.root}>
        <h4>Sort by</h4>
        <label className = {this.props.sortBy ==='release_year' ? styles.active : ''}>
          release date
          <input type='radio'
                 name='sortBy'
                 value='release date'
                 onChange={this.handleInputChange}
                 checked={this.props.sortBy ==='release_year'}/>
        </label>
        <label className = {this.props.sortBy ==='rating' ? styles.active : ''}>
          rating
          <input type='radio'
                 name='sortBy'
                 value='rating'
                 onChange={this.handleInputChange}
                 checked={this.props.sortBy ==='rating'} />
        </label>
      </div>
    );
  }

}

const actions = {
  setSort
}

function mapProps(state) {
  return {
    sortBy: state.sort
  }
}

export default connect(mapProps, actions)(SearchSort);
