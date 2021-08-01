import React from 'react';
import '../../App.css';
import './About.css';
import pfp from '../../images/Profile_Photos/TM_2_color.PNG';
import Footer from '../Footer';

export default function Products() {
    return (
        <>
        <h1 className="about">About</h1>
        
        <img src={pfp} alt="tony-pfp" className="profile-photo-1"></img>

        <p className="about-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
        <Footer/>
        </>
    );
}