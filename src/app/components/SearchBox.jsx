import React from 'react';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchBy: 'title'
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
    const style = {
      width: '100%'
    };
    return (
        <form className="search-box">
          <label>
            <h3>Find your movie</h3>
            <input name="searchText"
                   type="search"
                   placeholder="Search movie"
                   value={this.state.searchText}
                   onChange={this.handleInputChange}/>
          </ label>
          <div className="search-switcher">
            <h4>Search by</h4>
            <label>
              Title
              <input type="radio"
                     name="searchBy"
                     value="title"
                     onChange={this.handleInputChange}
                     checked={this.state.searchBy ==="title"}/>
            </label>
            <label>
              Director
              <input type="radio"
                     name="searchBy"
                     value="director"
                     onChange={this.handleInputChange}
                     checked={this.state.searchBy ==="director"} />
            </label>
          </div>
          <button type="submit">Search</button>
        </form>
    );
  }

}

export default SearchBox;
