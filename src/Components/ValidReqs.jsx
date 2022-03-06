import React, { useState } from 'react';

const ValidReqs = ({ length, number, lowercase, uppercase, email }) => {

  return (
    <div className="valid-reqs-container">
      <ul className="valid-reqs">
        <li className={length}>8 - 72 Characters</li>
        <li className={lowercase}>1 Lowercase Character</li>
        <li className={'not-valid'}>Should Not Match Your Email Address</li>
        <li className={uppercase}>1 Uppercase Character</li>
        <li className={number}>1 Number</li>
      </ul>
    </div >
  )
}

export default ValidReqs