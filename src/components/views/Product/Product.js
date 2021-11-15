import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOneProduct, fetchOneProduct} from '../../../redux/productsRedux';
import { getCartData, addToCart} from '../../../redux/cartRedux';
import styles from './Product.module.scss';
import { Container as ContainerPlus } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { CartBox } from '../../features/CartBox/CartBox';
import Drawer from '@material-ui/core/Drawer';


const Component = ({ product, fetchOneProduct, cartData, addToCart }) => {
  useEffect(() => {
    fetchOneProduct();
  }, [fetchOneProduct]);


  const { image, price, name, text} = product;
  const [cart, setCart] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = () => {
    const output = {
      image, price, name, quantity,
    };
    setCart(true);
    addToCart(output);
  };

  return (
    <div>
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
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              inputProps={{ min: 1 }}
              InputLabelProps={{
                shrink: true,
              }} />
            <Button className={styles.btn} onClick={() => handleAddToCart()}> Add to Card </Button>
            <Button className={styles.btn}> Buy now </Button>
          </div>
        </div>
      </ContainerPlus>
      <Drawer anchor='right' open={cart} onClose={() => setCart(false)} className={styles.cart}>
        <div className={styles.cartHeader}>
          <span onClick={() => setCart(false)}>{'>'}</span>
          <h2>Cart</h2>
        </div>
        {cartData.map((data, index) =>
          <CartBox key={index} data={data} />)}
      </Drawer>
    </div>
    
      
    
  );
};
Component.propTypes = {
  fetchOneProduct: PropTypes.func,
  product: PropTypes.object,
  addToCart: PropTypes.func,
  cartData: PropTypes.array,
};

const mapStateToProps = state => ({
  product: getOneProduct(state),
  cartData: getCartData(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
  addToCart: arg => dispatch(addToCart(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
