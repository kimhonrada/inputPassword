import React, { useState } from 'react';

const ValidReqs = ({ requirements }) => {

  return (
    <div className="valid-reqs-container">
      <ul className="valid-reqs">
        <li className={requirements.length}>8 - 72 Characters</li>
        <li className={'not-valid'}>1 Lowercase Character</li>
        <li className={'not-valid'}>Should Not Match Your Email Address</li>
        <li className={'not-valid'}>1 Uppercase Character</li>
        <li className={requirements.number}>1 Number</li>
      </ul>
    </div >
  )
}

export default ValidReqs