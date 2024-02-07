import React from 'react';
import './MyPhoto.css';

export default function MyPhoto () {
    const imagePath = '/images/myPhoto.jpg';

    return(
        <div className='MyPhoto'>            
            <img src={imagePath} alt={'Minha foto'}/>
            <div className='borderPhoto'></div>
        </div>
    );
};