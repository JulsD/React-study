import React from 'react';
import { Field, reduxForm } from 'redux-form'

import Button from '../Button';
import styles from './search-box.css';

let SearchForm = props => {
  const { handleSubmit, handleInputChange } = props
  return (
      <form className = {styles.root} onSubmit={handleSubmit}>
        <label>
          <h3 className = {styles.title}>Find your movie</h3>
          <Field name='searchText'
                 component='input'
                 className = {styles.searchInput}
                 type='search'
                 placeholder='Search movie'
                 onChange={handleInputChange}/>
        </ label>
        <div className = {styles.switcher}>
          <h4 className = {styles.switcherTitle}>Search by</h4>
          <Button type='label' kind={`${this.searchBy ==='title' ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
            Title
            <Field type='radio'
                   component='input'
                   name='searchBy'
                   value='title'
                   onChange={handleInputChange}
                   checked={this.searchBy ==='title'}/>
          </Button>
          <Button type='label' kind={`${this.searchBy ==='director' ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
            Director
            <Field type='radio'
                   component='input'
                   name='searchBy'
                   value='director'
                   onChange={handleInputChange}
                   checked={this.searchBy ==='director'} />
          </Button>
        </div>
        <div className = {styles.submit}>
          <Button type='submit' kind='primary'>Search</Button>
        </div>
      </form>
  );
}
SearchForm = reduxForm({
    form: 'searchForm'
})(SearchForm);

export default SearchForm;
