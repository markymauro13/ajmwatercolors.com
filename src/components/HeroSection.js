import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <h1>AJM Watercolors</h1>
            <p>Original watercolor paintings crafted by the Jersey Shore.</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn-outline'
                buttonSize='btn--large'
                >
                    Shop Now
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
