import React from 'react';
import PropTypes from 'prop-types';



// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.scss';

const Component = ({name, link}) => (
  <NavLink exact to={link} className={styles.root} activeClassName={styles.active}>
    {name}
  </NavLink>
);

Component.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavButton,
  // Container as NavButton,
  Component as NavButtonComponent,
};
