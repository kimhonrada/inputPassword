import React, { useState } from 'react';
import ValidReqs from './ValidReqs.jsx'
import { checkLength, checkNumber, checkLowercase, checkUppercase } from '../util/validator.js'

const PasswordInput = () => {

  const [show, setShow] = useState('password')
  const [length, setLength] = useState('not-valid')
  const [lowercase, setLowercase] = useState('not-valid')
  const [uppercase, setUppercase] = useState('not-valid')
  const [number, setNumber] = useState('not-valid')
  const [email, setEmail] = useState('not-valid')


  const handleChange = (e) => {
    checkLength(e.target.value) ? setLength('valid') : setLength('not-valid')
    checkNumber(e.target.value) ? setNumber('valid') : setNumber('not-valid')
    checkLowercase(e.target.value) ? setLowercase('valid') : setLowercase('not-valid')
    checkUppercase(e.target.value) ? setUppercase('valid') : setUppercase('not-valid')
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

/**
 const handleChange = (e) => {
    if (checkLength(e.target.value) === 'validLength') {
      setRequirements({
        length: 'valid'
      })
    } else {
      setRequirements({
        length: 'not-valid'
      })
    }

    if (checkNumber(e.target.value) === 'validNumber') {
      setRequirements({
        number: 'valid'
      })
    } else {
      setRequirements({
        number: 'not-valid'
      })
    }
  }
 */