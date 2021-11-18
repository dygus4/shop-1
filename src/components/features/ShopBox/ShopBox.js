import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ShopBox.module.scss';
import { QuantityButton } from '../../common/QuantityButton/QuantityButton';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/cartRedux';
import { addModal } from '../../../redux/modalRedux';
//import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const Component = ({image, name, price, _id, addModal, addToCart}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const output = {image, name, price, quantity, id: uuidv4()};

    addModal();
    addToCart(output);
  };
    

  return (
    <div className={styles.root}>
      <Link to={`/product/${_id}`} className={styles.imageWrapper}>
        <img src={image} alt=''></img>
      </Link>
      <h4>{name}</h4>
      <h4>{price} $ </h4>
      <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      <a className={styles.cartButton} onClick={() => handleAddToCart()}>Add to Cart</a>
    </div>
  );
};

Component.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  _id: PropTypes.string,
  addToCart: PropTypes.func,
  addModal: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = (dispatch, props) => ({
  addToCart: arg => dispatch(addToCart(arg)),
  addModal: () => dispatch(addModal()),
});

const Container = connect(null, mapDispatchToProps)(Component);



export {
  //  Component as ShopBox,
  Container as ShopBox,
  Component as ShopBoxComponent,
};
