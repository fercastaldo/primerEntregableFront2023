import './Card.css';
import React from 'react';


const Card = ({nombre, auto, colorAuto}) => {
  return (
    <div className='card'>

        <p>Hola {nombre}!</p> 
        <p>Sabemos que tu auto preferido es <span>{auto}</span> y te gusta de color <span>{colorAuto}</span> </p> 
         
    </div>
  )
}

export default Card

