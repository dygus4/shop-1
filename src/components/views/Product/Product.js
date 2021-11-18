import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOneProduct, fetchOneProduct} from '../../../redux/productsRedux';
import { addToCart} from '../../../redux/cartRedux';
import { addModal } from '../../../redux/modalRedux';
import styles from './Product.module.scss';
import { Container as ContainerPlus } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';



const Component = ({ product, fetchOneProduct, addModal, addToCart }) => {
  useEffect(() => {
    fetchOneProduct();
  }, [fetchOneProduct]);


  const { image, price, name, text, image2, image3} = product;
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = () => {
    const output = {
      image, price, name, quantity, id: uuidv4(),
    };
    addModal();
    addToCart(output);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    
    <ContainerPlus>
      <div className={styles.root}>
        <div className={styles.link}><Link to='/'>Back to HOME</Link></div>
        <div className={styles.leftWrapper}>
          <Slider {...settings} className={styles.imageWrapper}>
            <div>
              <img src={image} alt=''></img>
            </div>
            <div>
              <img src={image2} alt=''></img>
            </div>
            <div>
              <img src={image3} alt=''></img>
            </div>
          </Slider>
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
      
    
    
      
    
  );
};
Component.propTypes = {
  fetchOneProduct: PropTypes.func,
  product: PropTypes.object,
  addToCart: PropTypes.func,
  cartData: PropTypes.array,
  addModal: PropTypes.func,
  removeModal: PropTypes.func,
};

const mapStateToProps = state => ({
  product: getOneProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
  addToCart: arg => dispatch(addToCart(arg)),
  addModal: () => dispatch(addModal()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
