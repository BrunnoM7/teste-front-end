import React, { Fragment } from 'react';

import Navbar from '../Navbar/Navbar';

const UiShell = props => {
  return (
    <Fragment>
      <Navbar />
      <main className='flex'>
        {props.children}
      </main>
    </Fragment>
  )
}

export default UiShell;
