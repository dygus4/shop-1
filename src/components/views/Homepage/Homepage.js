import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={styles.root}>

      <Slider {...settings} className={styles.slider}>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
          <div className={styles.title}> Electric Car </div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
          <div className={styles.title}> Quick Charge </div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/2480315/pexels-photo-2480315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
          <div className={styles.title}> A lot of place charging</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
          <div className={styles.title}> Renewable Energy</div>
        </div>
        <div className={styles.imageWrapper}>
          <img  alt= '' src='https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
          <div className={styles.title}> Innovation</div>
        </div>
      </Slider>
      <div className={styles.sliderContent}>
        <div className={styles.wrapper}>
          <div className={styles.topContent}>
            <h1>WELCOME TO ELECTRIC CAR SHOP</h1>
          </div>
          
        </div>

      </div>
      <div className={styles.bottomContent}>
        <Button
          className={styles.button}
          variant='contained'
          color='primary'
          component={Link}
          to={'/shop'}
        >
            START SHOPPING
        </Button>
            
      </div>
    </div>
    
  );
};

Component.propTypes = {
  children: PropTypes.node,
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
