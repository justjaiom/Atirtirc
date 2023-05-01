import React, { Children, Component } from 'react'
export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="nav">
        <a href="/" className="site-title">site name</a>
        <ul>
            <CustomLink href="pricing">Pricing</CustomLink>
            <CustomLink href="about">About</CustomLink>

        </ul>
      </nav>
      </>
    )
  }
}

function CustomLink({ href, children, ...props}) {
const path = window.location.pathname
    return(
        <li className={path === href ? "active": ""}> 
            <a href={href} {...props}>{children} </a>
        </li>
    )
    
}


export default Navbar