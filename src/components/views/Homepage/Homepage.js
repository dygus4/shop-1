import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Box } from '../../features/Box/Box';

import { connect } from 'react-redux';
import { getAll, fetchProducts } from '../../../redux/productsRedux';
import { Container as ContainerPlus } from '@material-ui/core';
import styles from './Homepage.module.scss';

const Component = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
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
          <img  alt= '' src='https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
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
      <ContainerPlus>
        <div className={styles.productsWrapper}>
          <h1> Our products </h1>
          <div className={styles.boxesWrapper}>
            {products.map(data => 
              <Box key={data._id} data={data} />
            )}
          </div>
        </div>
      </ContainerPlus>
    </div>
    
  );
};

Component.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
