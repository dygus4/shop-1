import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Container } from '@material-ui/core';
import { NavButton } from '../../common/NavButton/NavButton';


import styles from './Header.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.container}>
      <NavButton name={'Home'} link='/' />
      <NavButton name={'About'} link='/about' />
      <NavButton name={'Shop'} link='/shop' />
      <NavButton name={'Cart'} link='/cart' />
    </Container>
  </div>
);

Component.propTypes = {
  
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
