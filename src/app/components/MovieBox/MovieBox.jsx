import React from 'react';

import styles from './movie-box.css';

class MovieBox extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className = {styles.root}>
        <div className = {styles.coverWrapper}>
          <div className = {styles.cover}></div>
        </div>
        <div className = {styles.details}>
          <div className = {styles.row}>
            <h2 className = {styles.title}>
              Lorem Ipsum
            </h2>
            <div className = {styles.rate}>
              <span>4.1</span>
            </div>
            <p className = {styles.genre}>Lorem Ipsum is simply</p>
            <div className = {styles.numb}>1990</div>
            <div className = {styles.numb}>{154} min</div>
          </div>
          <div className = {styles.row}>
            <p className = {styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className = {styles.additional}>
            <p className = {styles.director}>director</p>
            <p className = {styles.castList}>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          </div>
        </div>
      </div>
    );
  }

}

export default MovieBox;
