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
    this.props.setSort(value);
  }

  render() {
    return (
      <div className = {styles.root}>
        <h4>Sort by</h4>
        <label className = {this.props.sortBy ==='release_date' ? styles.active : ''}>
          release date
          <input type='radio'
                 name='sortBy'
                 value='release_date'
                 onChange={this.handleInputChange}
                 checked={this.props.sortBy ==='release_date'}/>
        </label>
        <label className = {this.props.sortBy ==='vote_average' ? styles.active : ''}>
          rating
          <input type='radio'
                 name='sortBy'
                 value='vote_average'
                 onChange={this.handleInputChange}
                 checked={this.props.sortBy ==='vote_average'} />
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
