import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOneProduct, fetchOneProduct} from '../../../redux/productsRedux';

import styles from './Product.module.scss';
import { Container as ContainerPlus } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';




const Component = ({ product, fetchOneProduct }) => {
  useEffect(() => {
    fetchOneProduct();
  }, [fetchOneProduct]);


  const { image, price, name, text} = product;
  const [cart, setCart] = React.useState(false);


  return (
    <ContainerPlus>
      <div className={styles.root}>
        <div className={styles.link}><Link to='/'>Back to HOME</Link></div>
        <div className={styles.leftWrapper}>
          <div className={styles.imageWrapper}>
            <img src={image} alt=''></img>
          </div>
          <div className={styles.textWrapper}>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <h1>{name}</h1>
          <h2>{price}$</h2>
          <TextField
            className={styles.quantity}
            label="Quantity"
            type="number"
            defaultValue='1'
            inputProps={{ min: 1 }}
            InputLabelProps={{
              shrink: true,
            }} />
          <Button className={styles.btn} onClick={() => setCart(true)}> Add to Card </Button>
          <Button className={styles.btn}> Buy now </Button>
        </div>
      </div>
    </ContainerPlus>

      
    
  );
};
Component.propTypes = {
  fetchOneProduct: PropTypes.func,
  product: PropTypes.object,
};

const mapStateToProps = state => ({
  product: getOneProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
