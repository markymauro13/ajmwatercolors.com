import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Footer from './Footer';
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
import Bluejays from '../images/Website_Photos/Bluejays.JPG';
import Bluewhale from '../images/Website_Photos/Bluewhale_1.jpg';
import Cards_paintings from '../images/Website_Photos/Cards.jpg';
import Boat_1 from '../images/Website_Photos/Boat_1.JPG';
import Boat_2 from '../images/Website_Photos/Boat_2.JPG';
import Boat_3 from '../images/Website_Photos/Boat_3.JPG';
import Cosmos_Queen from '../images/Website_Photos/Cosmos Queen.JPG';
import Butterflys from '../images/Website_Photos/DSC_1332.JPG';
import Allegience from '../images/Website_Photos/DSC_1392.JPG';
import Edgewater_1 from '../images/Website_Photos/Edgewater_1.JPG';
import Edgewater_2 from '../images/Website_Photos/Edgewater_2.JPG';
import Flowers from '../images/Website_Photos/Flowers.jpg';
import Frosty from  '../images/Website_Photos/Flowers.jpg';
import House_1 from  '../images/Website_Photos/House_1.jpg';
import Italy from  '../images/Website_Photos/Italy.JPG';
import Landscape_1 from  '../images/Website_Photos/Landscape_1.JPG';
import Landscape_2 from  '../images/Website_Photos/Landscape_2.JPG';
import Landscape_3 from  '../images/Website_Photos/Landscape_3.JPG';
import KoiFish from '../images/Website_Photos/Koi_1.JPG';
import Lighthouse from '../images/Website_Photos/Lighthouse_1.JPG';
import Nativity_1 from '../images/Website_Photos/Nativity_1.jpg';
import OG_Nagles from '../images/Website_Photos/OG_Nagles.JPG'; 
import OG_Tents from '../images/Website_Photos/OG_Tents.JPG'; 
import OT_Tower from '../images/Website_Photos/OT_Tower.jpg'; 
import OU_5th from '../images/Website_Photos/OU_5th.jpg'; 
import Pathway from '../images/Website_Photos/Pathway.JPG'; 
import Ribbon from '../images/Website_Photos/Ribbon.JPG'; 
import Sail_1 from '../images/Website_Photos/Sail_1.jpg'; 
import Sail_2 from '../images/Website_Photos/Sail_2.JPG'; 
import Sail_3 from '../images/Website_Photos/Sail_3.JPG'; 
import Sail_4 from '../images/Website_Photos/Sail_4.JPG'; 
import Sail_5 from '../images/Website_Photos/Sail_5.JPG'; 
import Sail_6 from '../images/Website_Photos/Sail_6.JPG'; 
import Sail_7 from '../images/Website_Photos/Sail_7.JPG'; 
import Sandyhook from '../images/Website_Photos/SandyHook_1.JPG'; 
import Seascape from '../images/Website_Photos/Seascape_Sunrise.jpg'; 
import Shawnee from '../images/Website_Photos/Shawnee.JPG'; 
import TerrisArch from '../images/Website_Photos/TerrisArch.JPG'; 
import Umbrellas from '../images/Website_Photos/Umbrellas.JPG'; 
import Wave_1 from '../images/Website_Photos/Wave.JPG'; 
import Wave_2 from '../images/Website_Photos/Wave_2.JPG'; 
import Wave_3 from '../images/Website_Photos/Wave_3.JPG'; 
import Victory from '../images/Website_Photos/Victory.JPG'; 
import York_Beach from '../images/Website_Photos/York Beach.JPG'; 
import Zodiac_1 from '../images/Website_Photos/Zodiac_1.JPG'; 
import Zodiac_2 from '../images/Website_Photos/Zodiac_2.JPG'; 
import Bones_1 from '../images/Website_Photos/Bones_1.JPG';


function Cards() {
  return (
    <>
    <div className='cards'>
      <h1>Shop Now</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={Abstract_1}
              text='Abstract 1'
              label='$100'
              path='/Abstract_1'
            />
            <CardItem
              src={Abstract_2}
              text='Abstract 2'
              label='$150'
              path='/products'
            />
            <CardItem
              src={Abstract_3}
              text='Abstract 3'
              label='$200'
              path='/products'
            />
          </ul >
          <ul className='cards__items'>
            <CardItem
                src={Abstract_4}
                text='Abstract 4'
                label='$350'
                path='/products'
              />
            <CardItem
                src={Abstract_5}
                text='Abstract 5'
                label='$25'
                path='/products'
              />
              <CardItem
                src={Abstract_6}
                text='Abstract 6'
                label='$25'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={AJ_1}
                text='AJ 1'
                label='SOLD'
                path='/products'
              />
            <CardItem
                src={AJ_2}
                text='AJ 2'
                label='$200'
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
                label='$250'
                path='/products'
              />
            <CardItem
                src={ASBURY_CH_2}
                text='Asbury 2'
                label='$250'
                path='/products'
              />
              <CardItem
                src={ASBURY_CH_3}
                text='Asbury 3'
                label='$250'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={ASBURY_CH_4}
                text='Asbury 4'
                label='$100'
                path='/products'
              />
            <CardItem
                src={ASBURY_CH_5}
                text='Asbury 5'
                label='$100'
                path='/products'
              />
              <CardItem
                src={ASBURY_CH_6}
                text='Asbury 6'
                label='$75'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={ASBURY_Life}
                text='Asbury Life'
                label='$150'
                path='/products'
              />
            <CardItem
                src={Avon_1}
                text='Avon 1'
                label='$25'
                path='/products'
              />
              <CardItem
                src={Avon_2}
                text='Avon 2'
                label='$50'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={Balcony}
                text='Balcony'
                label='$75'
                path='/products'
              />
            <CardItem
                src={Balls}
                text='Balls'
                label='SOLD'
                path='/products'
              />
              <CardItem
                src={BelmarBridge}
                text='Belmar Bridge'
                label='$250'
                path='/products'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src={Bermuda}
                text='Bermuda'
                label='$125'
                path='/products'
              />
            <CardItem
                src={Birch_1}
                text='Birch 1'
                label='$75'
                path='/products'
              />
              <CardItem
                src={Birch_2}
                text='Birch 2'
                label='$75'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Bluejays}
                text='Bluejays'
                label='$75'
                path='/products'
              />
            <CardItem
                src={Bluewhale}
                text='Bluewhale'
                label='$75'
                path='/products'
              />
              <CardItem
                src={Cards_paintings}
                text='Cards'
                label='SOLD'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Boat_1}
                text='Boat 1'
                label='$150'
                path='/products'
              />
            <CardItem
                src={Boat_2}
                text='Boat 2'
                label='$150'
                path='/products'
              />
              <CardItem
                src={Boat_3}
                text='Boat 3'
                label='$150'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Cosmos_Queen}
                text='Cosmos Queen'
                label='$150'
                path='/products'
              />
            <CardItem
                src={Butterflys}
                text='Butterflys'
                label='SOLD'
                path='/products'
              />
              <CardItem
                src={Allegience}
                text='Allegience'
                label='SOLD'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Boat_1}
                text='Boat 1'
                label='$150'
                path='/products'
              />
            <CardItem
                src={Boat_2}
                text='Boat 2'
                label='$150'
                path='/products'
              />
              <CardItem
                src={Boat_3}
                text='Boat 3'
                label='$150'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Edgewater_1}
                text='Edgewater 1'
                label='$100'
                path='/products'
              />
            <CardItem
                src={Edgewater_2}
                text='Edgewater 2'
                label='$100'
                path='/products'
              />
              <CardItem
                src={Flowers}
                text='Flowers'
                label='SOLD'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Frosty}
                text='Frosty'
                label='SOLD'
                path='/products'
              />
            <CardItem
                src={House_1}
                text='House 1'
                label='SOLD'
                path='/products'
              />
              <CardItem
                src={Italy}
                text='Italy'
                label='$100'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Landscape_1}
                text='Landscape 1'
                label='$100'
                path='/products'
              />
            <CardItem
                src={Landscape_2}
                text='Landscape 2'
                label='$100'
                path='/products'
              />
              <CardItem
                src={Landscape_3}
                text='Landscape 3'
                label='$100'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={KoiFish}
                text='Koi Fish'
                label='$50'
                path='/products'
              />
            <CardItem
                src={Lighthouse}
                text='Lighthouse'
                label='$50'
                path='/products'
              />
              <CardItem
                src={Nativity_1}
                text='Nativity'
                label='SOLD'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={OG_Nagles}
                text='Ocean Grove Nagles'
                label='$250'
                path='/products'
              />
            <CardItem
                src={OG_Tents}
                text='Ocean Grove Tents'
                label='$250'
                path='/products'
              />
              <CardItem
                src={OT_Tower}
                text='Ocean Township Tower'
                label='SOLD'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={OU_5th}
                text='Oklahoma University'
                label='$'
                path='/products'
              />
            <CardItem
                src={Pathway}
                text='Pathway'
                label='$100'
                path='/products'
              />
              <CardItem
                src={Ribbon}
                text='Ribbon'
                label='SOLD'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Sail_1}
                text='Sail 1'
                label='$400'
                path='/products'
              />
            <CardItem
                src={Sail_2}
                text='Sail 2'
                label='$25'
                path='/products'
              />
              <CardItem
                src={Sail_3}
                text='Sail 3'
                label='$200'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Sail_4}
                text='Sail 4'
                label='$150'
                path='/products'
              />
            <CardItem
                src={Sail_5}
                text='Sail 5'
                label='$25'
                path='/products'
              />
              <CardItem
                src={Sail_6}
                text='Sail 6'
                label='$75'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Sail_7}
                text='Sail 7'
                label='SOLD'
                path='/products'
              />
            <CardItem
                src={Sandyhook}
                text='Sandyhook'
                label='$50'
                path='/products'
              />
              <CardItem
                src={Seascape}
                text='Seascape Sunrise'
                label='$75'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Shawnee}
                text='Shawnee'
                label='$150'
                path='/products'
              />
            <CardItem
                src={TerrisArch}
                text='Arch'
                label='SOLD'
                path='/products'
              />
              <CardItem
                src={Umbrellas}
                text='Umbrellas'
                label='$150'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Wave_1}
                text='Wave 1'
                label='SOLD'
                path='/products'
              />
            <CardItem
                src={Wave_2}
                text='Wave 2'
                label='$150'
                path='/products'
              />
              <CardItem
                src={Wave_3}
                text='Wave 3'
                label='$150'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Bones_1}
                text='Bones 1'
                label='SOLD'
                path='/products'
              />
            <CardItem
                src={Victory}
                text='Victory'
                label='$'
                path='/products'
              />
            <CardItem
                src={York_Beach}
                text='York Beach'
                label='$'
                path='/products'
              />
            </ul>
            <ul className='cards__items'>
            <CardItem
                src={Zodiac_1}
                text='Zodiac 1'
                label='$50'
                path='/products'
              />
            <CardItem
                src={Zodiac_2}
                text='Zodiac 2'
                label='$50'
                path='/products'
              />
            </ul>
        </div>
      </div>
    </div>
    <Footer/>   
    </> 
  );
}

export default Cards;