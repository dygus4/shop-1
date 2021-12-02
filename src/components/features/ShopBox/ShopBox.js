import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ShopBox.module.scss';
import { QuantityButton } from '../../common/QuantityButton/QuantityButton';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/cartRedux';
import { addModal } from '../../../redux/modalRedux';
import { v4 as uuidv4 } from 'uuid';


const Component = ({image, name, price, _id, addModal, addToCart}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const output = {image, name, price, quantity, id: uuidv4(), _id };

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
      <span className={styles.cartButton} onClick={() => handleAddToCart()}>Add to Cart</span>
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


const mapDispatchToProps = (dispatch, props) => ({
  addToCart: arg => dispatch(addToCart(arg)),
  addModal: () => dispatch(addModal()),
});

const Container = connect(null, mapDispatchToProps)(Component);



export {
  Container as ShopBox,
  Component as ShopBoxComponent,
};
