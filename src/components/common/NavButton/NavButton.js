import React from 'react';
import PropTypes from 'prop-types';

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


export {
  Component as NavButton,
  Component as NavButtonComponent,
};
