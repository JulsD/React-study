import React from 'react';

import Button from '../Button';
import styles from './search-box.css';

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

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <form className = {styles.root}>
          <label>
            <h3 className = {styles.title}>Find your movie</h3>
            <input name='searchText'
                   className = {styles.searchInput}
                   type='search'
                   placeholder='Search movie'
                   value={this.state.searchText}
                   onChange={this.handleInputChange}/>
          </ label>
          <div className = {styles.switcher}>
            <h4 className = {styles.switcherTitle}>Search by</h4>
            <Button type='label' kind={`${this.state.searchBy ==='title' ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
              Title
              <input type='radio'
                     name='searchBy'
                     value='title'
                     onChange={this.handleInputChange}
                     checked={this.state.searchBy ==='title'}/>
            </Button>
            <Button type='label' kind={`${this.state.searchBy ==='director' ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
              Director
              <input type='radio'
                     name='searchBy'
                     value='director'
                     onChange={this.handleInputChange}
                     checked={this.state.searchBy ==='director'} />
            </Button>
          </div>
          <div className = {styles.submit}>
            <Button type='submit' kind='primary'>Search</Button>
          </div>
        </form>
    );
  }

}

export default SearchBox;
