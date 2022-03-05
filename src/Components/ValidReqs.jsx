import React, { useState } from 'react';

const ValidReqs = () => {
  return (
    <div className="valid-reqs-container">
      <ul className="valid-reqs">
        <li>8 - 72 Characters</li>
        <li>1 Lowercase Character</li>
        <li>Should Not Match Your Email Address</li>
        <li>1 Uppercase Character</li>
        <li>1 Number</li>
      </ul>
    </div>
  )
}

export default ValidReqs