import React from 'react'
import { Link } from 'react-router-dom'
type Props = {}

const Landing = (props: Props) => {
  return (
    <div>
        <h1>Welcome to the Landing page</h1>
    <div className='Register'>
        <Link to="/register">Register Here</Link>
    </div>
    <div className='Login'>
        <Link to="/login">Login Here</Link>
    </div>
    </div>
  )
}

export default Landing