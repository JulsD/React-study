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
      minHeight: '50px',
      backgroundColor: '#ccc'
    };
    let movieOpend = this.props.movieOpend;
    let emptyResults = this.props.emptyResults;

    let headerFooterBody = null;
    if (movieOpend) {
      headerFooterBody = <MovieInfo />;
    } else if (!emptyResults) {
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
