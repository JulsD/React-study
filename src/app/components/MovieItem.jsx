import React from 'react';

import btn from './../../styles/buttons.css';
import styles from './../../styles/movie-item.css';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const movieTitle = this.props.title;
    return (
      <div className = {styles.root}>
        <div className= {styles.cover}></div>
        <div className= {styles.details}>
          <div className= {styles.title}>{this.props.title} Title</div>
          <div className= {`${styles.date} ${btn.btn}`}>1990</div>
          <div className={styles.genre}>genre</div>
        </div>
      </div>
    );
  }

}

export default MovieItem;
