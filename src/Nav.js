import React from 'react'
import {Link} from 'react-router-dom'

const NavItem = ({children}) => {
  return (
    <div style={{display: 'inline-block', marginRight: 10, padding: 10, border: '1px solid black'}}>{children}</div>
  )
} 

const Home = () => {
  return (
    <div>
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem><Link to="/get-started">Get started</Link></NavItem>
    </div>
  )
}

export default Home