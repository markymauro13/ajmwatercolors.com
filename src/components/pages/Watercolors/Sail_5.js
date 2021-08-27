import React from 'react';
import './ProductItem.css';
import Sail_5 from '../../../images/Website_Photos/Sail_5.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Sail_5} target="_blank">
            <Image src={Sail_5} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Sail 5</h2>
                <p>$25</p>
                <p>Dimensions: 12x16</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Sail5&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Sail 5</h2>
                <p>$25</p>
                <p>Dimensions: 12x16</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Sail5&amp;body=Hello%20Tony,&amp;">
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