import React,  {useState} from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Box.module.scss';

const Component = () => {
  const [isShown, setIsShown] = useState(false);
  const [isTimer, setTimer] = useState(false);

  const SetOnMouseLeave = () => {
    setIsShown(false);
    setTimeout(() => {setTimer(false);}, 700);
  };

  const SetOnMouseEnter = () => {
    setIsShown(true);
    setTimer(true);
  };

  return (
    <div className={styles.root}
      onMouseEnter={() => SetOnMouseEnter()}
      onMouseLeave={() => SetOnMouseLeave()}
    >
      <div className={styles.imageWrapper}>
        <img alt='' src='https://images.pexels.com/photos/9800024/pexels-photo-9800024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
      </div>
      {
        isShown === false && isTimer === false ?
          <div className={styles.textWrapper}>
            <h3>TESLA</h3>
            <h5>PRICE 5$</h5>
          </div> :
          <div className={styles.textWrapper}>
            <div><Link to='/details'>View Details</Link></div>
          </div>
      }
    </div>
  );
};
//Component.propTypes = {
  //children: PropTypes.node,
  
//};

export {
  Component as Box,
  Component as BoxComponent,
};
