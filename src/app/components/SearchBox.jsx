import React from 'react';

import btn from './../../styles/buttons.css';
import styles from './../../styles/search-box.css';

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
    return (
        <form className = {styles.root}>
          <label>
            <h3 className = {styles.title}>Find your movie</h3>
            <input name="searchText"
                   className = {styles.searchInput}
                   type="search"
                   placeholder="Search movie"
                   value={this.state.searchText}
                   onChange={this.handleInputChange}/>
          </ label>
          <div className = {styles.switcher}>
            <h4 className = {styles.switcherTitle}>Search by</h4>
            <label className={`${btn.btn} ${this.state.searchBy ==="title" ? btn.btnRed : btn.btnNotActive} ${styles.switcherBtn}`}>
              Title
              <input type="radio"
                     name="searchBy"
                     value="title"
                     onChange={this.handleInputChange}
                     checked={this.state.searchBy ==="title"}/>
            </label>
            <label className={`${btn.btn} ${this.state.searchBy ==="director" ? btn.btnRed : btn.btnNotActive} ${styles.switcherBtn}`}>
              Director
              <input type="radio"
                     name="searchBy"
                     value="director"
                     onChange={this.handleInputChange}
                     checked={this.state.searchBy ==="director"} />
            </label>
          </div>
          <div className = {styles.submit}><button type="submit" className = {`${btn.btn} ${btn.btnRed}`}>Search</button></div>
        </form>
    );
  }

}

export default SearchBox;
