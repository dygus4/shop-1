import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShopBox.module.scss';

const Component = ({image, name, price}) => (
  <div className={styles.root}>
    <div className={styles.imageWrapper}>
      <img src={image} alt=''></img>
    </div>
    <h4>{name}</h4>
    <h4>{price} $ </h4>
  </div>
);

Component.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};


export {
  Component as ShopBox,
  // Container as ShopBox,
  Component as ShopBoxComponent,
};
