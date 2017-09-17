import React from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox';
import MovieBox from './MovieBox';
import HeaderFooter from './HeaderFooter';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const movieOpend = this.props.movieOpend;
    const emptyResults = this.props.emptyResults;

    let headerBody = null;
    if (movieOpend) {
      headerBody = <MovieBox />;
    } else {
      headerBody = <SearchBox />;
    }

    const style = {
      width: '100%',
      backgroundColor: 'yellow'
    };
    return (
      <header style={style}>
        <Nav movieOpend={movieOpend}/>
        {headerBody}
        <HeaderFooter movieOpend={movieOpend} emptyResults = {emptyResults}/>
      </header>
    );
  }

}

export default Header;
