import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Container } from '@material-ui/core';
import { NavButton } from '../../common/NavButton/NavButton';

import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './Header.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.container}>
      <NavButton name={'Home'} link='/' />
      <NavButton name={'About'} link='/about' />
      <NavButton name={'Shop'} link='/shop' />
      <NavButton name={'Cart'} link='/cart' />
      <NavLink to='/auth/google' className={styles.btn}><AccountCircleIcon /> LOG IN</NavLink>
    </Container>
  </div>
);

Component.propTypes = {
  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
