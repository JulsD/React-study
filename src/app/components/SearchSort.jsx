import React from 'react';

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

    console.log(name + ':' + value);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="search-sort">
        <h4>Sort by</h4>
        <label>
          release date
          <input type="radio"
                 name="sortBy"
                 value="release date"
                 onChange={this.handleInputChange}
                 checked={this.state.sortBy ==="release date"}/>
        </label>
        <label>
          rating
          <input type="radio"
                 name="sortBy"
                 value="rating"
                 onChange={this.handleInputChange}
                 checked={this.state.sortBy ==="rating"} />
        </label>
      </div>
    );
  }

}

export default SearchSort;
