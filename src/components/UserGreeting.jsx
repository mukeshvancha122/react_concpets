import React, { use, useState } from 'react'

// if-else, element variables, ternary, short-circuit operator
const UserGreeting = (props) => {
  const [isloggedIn, setisLoggedIn]= useState(false)
  return (
    <div>
      {isloggedIn ? "Welcome to the portal": "Please login"}
    </div>
  )
}

export default UserGreeting