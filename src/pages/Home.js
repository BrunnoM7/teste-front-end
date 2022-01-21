import React, { useContext, useEffect } from 'react';

import MenuContext from '../context/menu/MenuContext';

import Section from '../components/Section';

const Home = () => {
  const menuContext = useContext(MenuContext);
  const { menu, getMenu } = menuContext;

  useEffect(() => {
    getMenu();
  }, [])

  return (
    <div className='container'>
      {menu.map(({ category_title, products }) => <Section key={category_title} title={category_title} products={products} />)}
    </div>
    );
};

export default Home;
