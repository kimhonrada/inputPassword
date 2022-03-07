import React, { useState, useEffect } from "react";
import PasswordInput from './Components/PasswordInput.jsx'
import ValidReqs from './Components/ValidReqs.jsx'
import axios from 'axios'

const App = () => {

  const [email, setEmail] = useState('')

  // retrieve email from API on render
  useEffect(() => {
    axios("https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813")
      .then(({ data }) => {
        setEmail(data.user.email)
      })
      .catch((err) => console.log(err));
  })

  return (
    <>
      <div className="container">
        <PasswordInput emailToCheck={email} />
      </div>
    </>
  )
};

export default App;
