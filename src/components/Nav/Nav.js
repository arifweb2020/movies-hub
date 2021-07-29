import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top my-nav">
      <div className="container">
        <Link className="navbar-brand" to="/">Movies-Hub</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Trending</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies-list">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tv-series-list">Tv Series</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search-list">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
