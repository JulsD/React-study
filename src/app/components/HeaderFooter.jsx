import React from 'react';
import SearchNav from './SearchNav';
import MovieInfo from './MovieInfo';

class HeaderFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: '100%',
      backgroundColor: '#ccc'
    };
    const movieOpend = this.props.movieOpend;

    let headerFooterBody = null;
    if (movieOpend) {
      headerFooterBody = <MovieInfo />;
    } else {
      headerFooterBody = <SearchNav />;
    }

    return (
      <div style={style}>
        {headerFooterBody}
      </div>
    );
  }

}

export default HeaderFooter;
