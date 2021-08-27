import React from 'react';
import './ProductItem.css';
import Edgewater_1 from '../../../images/Website_Photos/Edgewater_1.JPG'; 
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ProductItem() {
    return (
    <>  

        <div className="image-container">
            <a href={Edgewater_1} target="_blank">
            <Image src={Edgewater_1} className="product_image" width="600" height="400"/>
            </a>
            <div className="desc-container text-center">
                <h2>Edgewater 1</h2>
                <p>$100</p>
                <p>Dimensions: 14x20</p>    
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Edgewater1&amp;body=Hello%20Tony,&amp;">
                <Button variant="dark" type="button">Buy Now</Button>{''}   
                </a>     
                </div>
            </div>
        </div>

        <div className="container-desc">
            <div className="wtf">
                <h2>Edgewater 1</h2>
                <p>$100</p>
                <p>Dimensions: 14x20</p>
                <div className="button-container">
                <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Edgewater1&amp;body=Hello%20Tony,&amp;">
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