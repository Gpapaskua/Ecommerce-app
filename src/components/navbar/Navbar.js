import React, {useRef} from 'react'

export const Navbar = () => {
  const pagesRef = useRef()
  const userOptionRef = useRef()
  const showNavbar = useRef()
    return (
      <nav className="navbar navbar-expand-lg navbar-dark nav-color">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onClick={() => {showNavbar.current.classList.toggle('show')}}></span>
      </button>
    
      <div className="collapse navbar-collapse mx-auto" ref={showNavbar} id="navbarSupportedContent">
        <ul className="navbar-nav ml-5">
          <li className="nav-item active">
            <a className="nav-link" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PRODUCTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PRODUCT DETAIL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CART</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CHECKOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">MY ACCOUNT</a>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" 
            onClick={() => {pagesRef.current.classList.toggle('show')}} id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="true">
              More Pages
            </span>
            <div className="dropdown-menu" ref={pagesRef} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <div className="navbar-nav mx-auto">
        <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={() => {userOptionRef.current.classList.toggle('show')}}
             id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              User Account
            </span>
            <div className="dropdown-menu" ref={userOptionRef} aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </div>
      </div>
    </nav>
    )
}
