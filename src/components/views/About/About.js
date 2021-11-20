import React from 'react';






import styles from './About.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.banner}>
      <h1>ELECTRIC CAR SHOP</h1>
    </div>
    <h2 className={styles.subTitle}>OUR MISSION</h2>
    <h4 className={styles.text}>We created Electric Car Shop to give the industry something it desperately needed: a dedicated electric vehicle platform and community that allows consumers to learn about, buy, and sell electric vehicles in the most simplistic and user friendly manner available.</h4>
   
  
  </div>
);


export {
  Component as About,
  
  Component as AboutComponent,
};
