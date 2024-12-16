import React from 'react';
import Logo from '../APPLE WEB BOOTSTRAP/img/icons/apple-tv-logo.png'
import Servant from '../APPLE WEB BOOTSTRAP/img/icons/servant-logo.png'

function Tv_and_airpod() {
  return (
    <div>
      <section className="mt-4 babyairpod row">
        <div className="baby d-lg-block col-md-6">
          <div>
            <center>
              <img src={Logo} />
            </center>
          </div>
          <div>
            <img src={Servant} />
          </div>
          <div className="links text-center pt-5">
            <a href="#">
              <h6>LEARN MORE &gt;</h6>
            </a>
            <a href="#">
              <h6>BUY &gt;</h6>
            </a>
          </div>
        </div>
        <div className="airpod border col-md-6">
          <div className="pt-5">
            <h3 className="text-center fw-bold">
              <span className="text-dark">AIRPO</span>DS PRO.
            </h3>
            <h6 className="text-center">
              Magic like you have never <br /> heard.
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tv_and_airpod;
