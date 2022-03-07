import React, { useState } from 'react';
import ValidReqs from './ValidReqs.jsx'
import { checkLength, checkNumber, checkLowercase, checkUppercase, checkEmail } from '../util/validator.js'

const PasswordInput = ({ emailToCheck }) => {

  const [show, setShow] = useState('password')
  const [length, setLength] = useState('invalid')
  const [lowercase, setLowercase] = useState('invalid')
  const [uppercase, setUppercase] = useState('invalid')
  const [number, setNumber] = useState('invalid')
  const [email, setEmail] = useState('invalid')


  const handleChange = (e) => {
    checkLength(e.target.value) ? setLength('valid') : setLength('invalid')
    checkNumber(e.target.value) ? setNumber('valid') : setNumber('invalid')
    checkLowercase(e.target.value) ? setLowercase('valid') : setLowercase('invalid')
    checkUppercase(e.target.value) ? setUppercase('valid') : setUppercase('invalid')
    checkEmail(e.target.value, emailToCheck) ? setEmail('valid') : setEmail('invalid')
  }

  const showPassword = () => {
    show === 'password' ? setShow('text') : setShow('password');
  }

  return (
    <div className="password-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <div>Password</div>
          <input
            type={show}
            name="password"
            placeholder="Enter your password"
            onChange={(e) => { handleChange(e) }}
          />
          <input type="checkbox" onClick={() => showPassword()} />Show
        </label>
      </form>
      <div className="required-list">
        <ValidReqs length={length} lowercase={lowercase} uppercase={uppercase} number={number} email={email} />
      </div>
    </div>
  )
}

export default PasswordInput;
