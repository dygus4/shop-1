import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QuantityButton } from '../../common/QuantityButton/QuantityButton';

import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/cartRedux';

import styles from './CartBox.module.scss';

const Component = ({ data, removeFromCart }) => {
  const { image, price, name, quantity, id} = data;
  const [quantityState, setQuantityState] = useState(quantity);

  return (
    <div className={styles.root}>
      <span className={styles.closebtn} onClick={()=> removeFromCart(id)}>X</span>
      <div className={styles.leftWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} alt=''></img>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <h4>{name}</h4>
        <h4>${price}</h4>
        <QuantityButton quantity={quantityState} setQuantity={setQuantityState} cart={true} id={id} />
      </div>
    </div>
  );

};

Component.propTypes = {
  data: PropTypes.object, 
  removeFromCart: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  removeFromCart: arg => dispatch(removeFromCart(arg)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //  Component as CartBox,
  Container as CartBox,
  Component as CartBoxComponent,
};
