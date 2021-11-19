import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.link}><Link to='/'>BACK TO HOME</Link></div>
    <div className={styles.imageWrapper}>
      <img src='https://media.istockphoto.com/photos/internet-page-not-found-hand-with-magnifier-concept-picture-picture-id1207750534' alt='' />
    </div>
  </div>
);

Component.propTypes = {
  
};



export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
