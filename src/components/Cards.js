import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
/*IMPORTING ALL IMAGES*/ 
import Abstract_1 from '../images/Website_Photos/Abstract_1.JPG';
import Abstract_2 from '../images/Website_Photos/Abstract_2.JPG';
import Abstract_3 from '../images/Website_Photos/Abstract_3.JPG';
import Abstract_4 from '../images/Website_Photos/Abstract_4.jpg';
import Abstract_5 from '../images/Website_Photos/Abstract_5.JPG';
import Abstract_6 from '../images/Website_Photos/Abstract_6.JPG';
import AJ_1 from '../images/Website_Photos/AJ_1.JPG';
import AJ_2 from '../images/Website_Photos/AJ_2.JPG';
import America_1 from '../images/Website_Photos/America_1.jpg';
import ASBURY_CH_1 from '../images/Website_Photos/ASBURY_CH_1.jpg';
import ASBURY_CH_2 from '../images/Website_Photos/ASBURY_CH_2.jpg';
import ASBURY_CH_3 from '../images/Website_Photos/ASBURY_CH_3.jpg';
import ASBURY_CH_4 from '../images/Website_Photos/ASBURY_CH_4.JPG';
import ASBURY_CH_5 from '../images/Website_Photos/ASBURY_CH_5.JPG';
import ASBURY_CH_6 from '../images/Website_Photos/ASBURY_CH_6.JPG';
import ASBURY_Life from '../images/Website_Photos/ASBURY_Life.JPG';
import Avon_1 from '../images/Website_Photos/Avon_1.JPG';
import Avon_2 from '../images/Website_Photos/Avon_2.JPG';
import Balcony from '../images/Website_Photos/Balcony.JPG';
import Balls from '../images/Website_Photos/Balls.jpg';
import BelmarBridge from '../images/Website_Photos/BelmarBridge.JPG';

import Bermuda from '../images/Website_Photos/Bermuda.jpg';
import Birch_1 from '../images/Website_Photos/Birch_1.JPG';
import Birch_2 from '../images/Website_Photos/Birch_2.JPG';




function Cards() {
  return (
    <div className='cards'>
      <h1>Show Now</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          
          <ul className='cards__items'>
          <CardItem
              src={Abstract_1}
              text='Abstract 1'
              label='$300'
              path='/products'
            />
            <CardItem
              src={Abstract_2}
              text='Abstract 2'
              label='$300'
              path='/products'
            />
            <CardItem
              src={Abstract_3}
              text='Abstract 3'
              label='$300'
              path='/products'
            />
          </ul >
          <ul className='cards__items'>
            <CardItem
                src={Abstract_4}
                text='Abstract 4'
                label='$300'
                path='/products'
              />
            <CardItem
                src={Abstract_5}
                text='Abstract 5'
                label='$300'
                path='/products'
              />
              <CardItem
                src={Abstract_6}
                text='Abstract 6'
                label='$300'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={AJ_1}
                text='AJ 1'
                label='$300'
                path='/products'
              />
            <CardItem
                src={AJ_2}
                text='AJ 2'
                label='$300'
                path='/products'
              />
              <CardItem
                src={America_1}
                text='America 1'
                label='$300'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={ASBURY_CH_1}
                text='Asbury 1'
                label='$300'
                path='/products'
              />
            <CardItem
                src={ASBURY_CH_2}
                text='Asbury 2'
                label='$300'
                path='/products'
              />
              <CardItem
                src={ASBURY_CH_3}
                text='Asbury 3'
                label='$300'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={ASBURY_CH_4}
                text='Asbury 4'
                label='$300'
                path='/products'
              />
            <CardItem
                src={ASBURY_CH_5}
                text='Asbury 5'
                label='$300'
                path='/products'
              />
              <CardItem
                src={ASBURY_CH_6}
                text='Asbury 6'
                label='$300'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={ASBURY_Life}
                text='Asbury Life'
                label='$300'
                path='/products'
              />
            <CardItem
                src={Avon_1}
                text='Avon 1'
                label='$300'
                path='/products'
              />
              <CardItem
                src={Avon_2}
                text='Avon 2'
                label='$300'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={Balcony}
                text='Balcony'
                label='$300'
                path='/products'
              />
            <CardItem
                src={Balls}
                text='Balls'
                label='$300'
                path='/products'
              />
              <CardItem
                src={BelmarBridge}
                text='Belmar Bridge'
                label='$300'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={Bermuda}
                text='Bermuda'
                label='$300'
                path='/products'
              />
            <CardItem
                src={Birch_1}
                text='Birch 1'
                label='$300'
                path='/products'
              />
              <CardItem
                src={Birch_2}
                text='Birch 2'
                label='$300'
                path='/products'
              />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;