import React, { useState } from 'react';
import ValidReqs from './ValidReqs.jsx'
import validator from '../util/validator.js'

const PasswordInput = () => {

  const [show, setShow] = useState('password')
  const [requirements, setRequirements] = useState({
    length: 'not-valid',
    lowercase: 'not-valid',
    uppercase: 'not-valid',
    number: 'not-valid',
    email: 'not-valid'
  })

  const handleChange = (e) => {
    if (validator(e.target.value) === 'validLength') {
      setRequirements({
        length: 'valid'
      })
    } else {
      setRequirements({
        length: 'not-valid'
      })
    }
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
        <ValidReqs requirements={requirements} />
      </div>
    </div>
  )
}

export default PasswordInput;