import React from 'react';
import '../../App.css';
import './About.css';
import pfp from '../../images/Profile_Photos/TM_2_color.PNG';

export default function Products() {
    return (
        <>
        <h1 className="about">About</h1>
        
        <img src={pfp} alt="tony-pfp" className="profile-photo-1"></img>

        <p className="about-paragraph">
            Tony Mauro is a professional architect for <a href='https://kntm.com/' style={ {color: '#f7894a'}}> KNTM Architects.</a> When not designing buildings, Tony enjoys creating watercolor paintings for a variety of different sceneries. 
        </p>
        </>
    );
}