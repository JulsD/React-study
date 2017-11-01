import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchBy: 'title'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/search',
      search: this.props.form.searchBy + '=' + this.props.form.searchText
    })
  }

  render() {
    return (
        <SearchForm onSubmit={this.handleSubmit} onChange={this.handleInputChange}/>
    );
  }
}

function mapProps(state) {
  return {
    form: state.form
  }
}

export default withRouter(connect(mapProps)(SearchBox));