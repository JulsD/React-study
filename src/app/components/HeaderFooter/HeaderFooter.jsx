import React from 'react';
import { SearchNav, MovieInfo } from './../';

import common from './../../../styles/common.css';
import styles from './header-footer.css';

class HeaderFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let movieOpend = this.props.movieOpend;
    let emptyResults = this.props.emptyResults;

    let headerFooterBody = null;
    if (movieOpend) {
      headerFooterBody = <MovieInfo />;
    } else if (!emptyResults) {
      headerFooterBody = <SearchNav />;
    }

    return (
      <div className = {styles.root}>
        <div className = {common.wrapper}>
          {headerFooterBody}
        </div>
      </div>
    );
  }

}

export default HeaderFooter;
