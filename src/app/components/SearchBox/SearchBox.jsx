import React from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import Button from '../Button';
import styles from './search-box.css';

const renderRadioField = ({label, input}) => (
  <Button type='label' kind={`${input.checked ? 'primary' : 'not-active'}`} className={styles.switcherBtn}>
    {label}
    <input type='radio' {...input}/>
  </Button>
)

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
          <Field type='radio'
                 name='searchBy'
                 value='title'
                 component={renderRadioField}
                 label='Title'/>
          <Field type='radio'
                 component={renderRadioField}
                 name='searchBy'
                 value='director'
                 label='Director'/>
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