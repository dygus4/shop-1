import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAll, fetchProducts } from '../../../redux/productsRedux';
import { Container as ContainerPlus } from '@material-ui/core';
import { connect } from 'react-redux';
import styles from './Shop.module.scss';
import { ShopBox } from '../../features/ShopBox/ShopBox';

const Component = ({products, fetchProducts}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <h1>ELECTRIC CAR SHOP</h1>
      </div>
      <h2 className={styles.subTitle}>CHOOSE PRODUCT AND ADD TO CART</h2>
      <ContainerPlus>
        <div className={styles.products}>
          {products.map(data => 
            <ShopBox {...data} key={data._id} /> 
          )}
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
  Container as Shop,
  Component as ShopComponent,
};
