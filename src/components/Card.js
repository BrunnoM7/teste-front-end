import React from 'react';

const Card = ({ title, price, thumbnail, description, picture }) => {

  const formatDescription = () => {
    let end = description.length > 50 ? '...' : '';
    return description.split('').slice(0,50).join('')+end;
  }

  const formatPrice = () => {
    const cases = {
      1: ".00",
      2: ".00",
      4: "0"
    }

    return cases[price.toString().length] ? `${price}${cases[price.toString().length]}` : price;
  }

  return (
    <div className='card'>
      <div className='flex-sm'>
        <img src={thumbnail} alt={description} className='hide-lg' style={{maxHeight: '90px'}}/>
        <img src={picture} alt={description} className='hide-sm' style={{width: '100%'}} />
        <div>
          <p className='item-title'>{title}</p>
          <p className='item-description'>{formatDescription()}</p>
        </div>
      </div>

      <div>
        <p className='item-price'>R$ {formatPrice()}</p>
      </div>
    </div>
  );
};

export default Card;
