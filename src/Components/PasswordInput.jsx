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
      <span>Password</span>
      <form className='password-form' onSubmit={(e) => e.preventDefault()}>
        <input
          className='password-field'
          type={show}
          name="password"
          placeholder="Enter your password"
          onChange={(e) => { handleChange(e) }}
        />
        <div className='password-show'>
          <label for="show">
            <input type="checkbox" id='show' onClick={() => showPassword()} />
            Show
          </label>
        </div>
      </form>
      <div>
        <ValidReqs
          length={length}
          lowercase={lowercase}
          uppercase={uppercase}
          number={number}
          email={email} />
      </div>

    </div>
  )
}

export default PasswordInput;
