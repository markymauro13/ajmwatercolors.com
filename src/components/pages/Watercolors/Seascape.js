import React from 'react';
import './ProductItem.css';
import Seascape from '../../../images/Website_Photos/Seascape_Sunrise.jpg'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Seascape} target="_blank">
            <Image src={Seascape} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Seascape Sunrise</h2>
                <p>$75</p>
                <p>Dimensions: 18x24</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20SeascapeSunrise&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Seascape Sunrise</h2>
                <p>$75</p>
                <p>Dimensions: 18x24</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20SeascapeSunrise&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a> 
                </div>
            </div>
        </div>

        <div className="whitespace-container"></div>
    </>
    
    );

  }
  

  
  export default ProductItem;