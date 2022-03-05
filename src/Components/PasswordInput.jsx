import React, { useState } from 'react';

const PasswordInput = () => {

  const [show, setShow] = useState('password')

  const handleChange = (e) => {
    console.log(`this is your password ${e.target.value}`)
  }

  const showPassword = () => {
    show === 'password' ? setShow('text') : setShow('password');
  }

  return (
    <div className="password-container">
      <form>
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
    </div>
  )
}

export default PasswordInput;