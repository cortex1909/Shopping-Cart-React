import React from 'react'
import { Link } from 'react-router-dom'

function Header({ appName, linkTo }) {
  const link = `/${linkTo}`
  return (
    <header>
      <nav>
        <p>
          cortex19 <strong>{appName}</strong>
        </p>
        <Link to={linkTo === 'webshop' ? link : `/`}>
          <button className="webshopBtn">{linkTo}</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
