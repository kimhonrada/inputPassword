import React from 'react';

const PasswordInput = () => {

  const handleChange = (e) => {
    console.log(`this is your password ${e.target.value}`)
  }

  return (
    <div className="password-container">
      <form>
        <label>
          <div>Password</div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => { handleChange(e) }}
          />
          <input type="checkbox" />Show
        </label>
      </form>
    </div>
  )
}

export default PasswordInput;