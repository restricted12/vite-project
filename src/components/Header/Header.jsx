import React from 'react'
import logo from '../APPLE WEB BOOTSTRAP/img/icons/logo.png'
import search from '../APPLE WEB BOOTSTRAP/img/icons/search-icon.png'
import cart from '../APPLE WEB BOOTSTRAP/img/icons/cart.png'





 function Header() {
  return (
    <div>
      <section>
      <header>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <a href="/main">
                  <img src={logo} />
                </a>
              </li>
              <li><a href="/mac">MAC</a></li>
              <li><a href="/iphone" className="d-none d-md-block">IPHONE</a></li>
              <li><a href="ipad">IPAD</a></li>
              <li><a href="/tv" className="d-none d-md-block">TV</a></li>
              <li><a href="/watch">WATCH</a></li>
              <li><a href="/music" className="d-none d-md-block">MUSIC</a></li>
              <li><a href="/services">SERVICES</a></li>
              <li>
                <a href="#">
                  <img src={search} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={cart} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
    </div>
  )
}
export default Header;