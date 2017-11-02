import React from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import Button from '../Button';
import styles from './search-box.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchBy: 'title'
    };
  }

  submit(value) {
    this.props.history.push({
      pathname: '/search',
      search: value.searchBy + '=' + value.searchText
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className = {styles.root} onSubmit={handleSubmit(this.submit.bind(this))}>
        <label>
          <h3 className = {styles.title}>Find your movie</h3>
          <Field name='searchText'
                 component='input'
                 className = {styles.searchInput}
                 type='search'
                 placeholder='Search movie'/>
        </ label>
        <div className = {styles.switcher}>
          <h4 className = {styles.switcherTitle}>Search by</h4>
          <Button type='label' kind={`${this.searchBy ==='title' ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
            Title
            <Field type='radio'
                   component='input'
                   name='searchBy'
                   value='title'/>
          </Button>
          <Button type='label' kind={`${this.searchBy ==='director' ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
            Director
            <Field type='radio'
                   component='input'
                   name='searchBy'
                   value='director'/>
          </Button>
        </div>
        <div className = {styles.submit}>
          <Button type='submit' kind='primary'>Search</Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
    form: 'search'
})(withRouter(SearchBox));