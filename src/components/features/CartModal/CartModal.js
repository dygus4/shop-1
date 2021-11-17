import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { removeModal, getModal } from '../../../redux/modalRedux.js';
import { getCartData } from '../../../redux/cartRedux.js';
import Drawer from '@material-ui/core/Drawer';
import { CartBox } from '../../features/CartBox/CartBox';
import styles from './CartModal.module.scss';
import { Link } from 'react-router-dom';

const Component = ({ removeModal, modalData, cartData }) => {
  return (
    <Drawer anchor='right' open={modalData} onClose={() => removeModal()} className={styles.cart}>
      <div className={styles.cartHeader}>
        <span onClick={() => removeModal()}>{'>'}</span>
        <h2>Cart</h2>
      </div>
      {cartData.map((data, index) =>
        <CartBox key={index} data={data} />)}
      <div className={styles.cartFooter}>
        <Link to='/cart' onClick={removeModal}> Cart</Link>
      </div>
    </Drawer>
  );
};

Component.propTypes = {
  addModal: PropTypes.func,
  removeModal: PropTypes.func,
  modalData: PropTypes.bool,
  cartData: PropTypes.array,
};

const mapStateToProps = state => ({
  modalData: getModal(state),
  cartData: getCartData(state),
});

const mapDispatchToProps = dispatch => ({
  removeModal: () => dispatch(removeModal()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as CartModal,
  Component as CartModalComponent,
};