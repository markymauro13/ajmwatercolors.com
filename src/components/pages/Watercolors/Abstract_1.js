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
    <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src={Abstract_1} className="product_image"/>
            <Card.Body>
             <Card.Title>Abstract 1</Card.Title>
             <Card.Text>$100</Card.Text>
             <Card.Text>Dimensions: 12x16</Card.Text>
                <Card.Text className="click-the-button">
                    Click the button to write me an email to buy your painting.
                </Card.Text>
                <Button variant="dark">Buy Now</Button>{' '}
            </Card.Body>
    </Card>
    </Container>
<Footer/>

</>
    );

  }
  

  
  export default ProductItem;