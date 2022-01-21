import React from 'react';

import Card from './Card';

const Section = ({title, products}) => {
  return (
    <div>
      <h2 className='center section-title'>{title}</h2>
      <div className='flex'>
      {products.map(product => {
        return <Card key={product.id} { ...product } />
      })}
      </div>
    </div>
  );
};

export default Section;
