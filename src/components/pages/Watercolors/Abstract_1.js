import React from 'react';
import './ProductItem.css';
import Abstract_1 from '../../../images/Website_Photos/Abstract_1.JPG'; 
import Footer from '../../Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



function ProductItem() {
    return (
<>  
  <Container className="justify-content-md-center">
  <Row sm={4} md={4} lg={4} className="picture mt-4 justify-content-md-center">
  <a href={Abstract_1}>
  <Image src={Abstract_1} fluid rounded className="product_image"/>
  </a>
  </Row>
  <Row lg={12} md={8} className="bottom-description ml-5 mt-3">
      
      <ul className="bottom-description mt-2">
      <Card body className="mb-3">
         <li className="text-center mt-2">
             <h1>Abstract 1</h1>
         </li>
         <li className="text-center mt-2">
             <h3>$100</h3>
         </li> 
         <li className="text-center mt-2">
            <p>Dimensions: 12x16</p>
         </li>
         <li className="click-the-button text-center mt-2">
             <p>Click the button to write me an email to buy your painting.</p>
         </li>
         <li className="text-center mt-2">
             <a href="mailto:ajmstudiowatercolors@gmail.com?subject=Interested%20in%20Abstract1&amp;body=Hello%20Tony,&amp;">
             <div className="mb-3 p-2">
             <Button variant="dark">Buy Now</Button>{' '}
             </div>
             </a>
        </li>
        </Card>

     </ul>
    </Row>
    </Container>

<Footer/>
</>
    );

  }
  

  
  export default ProductItem;