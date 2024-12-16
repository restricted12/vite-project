import React from 'react';
import Logo from '../APPLE WEB BOOTSTRAP/img/icons/logo.png';

function Watch_and_card() {
  return (
    <section className="mt-4 watchcard row">
      {/* Watch Section */}
      <div className="watch border d-lg-block col-md-6">
        <img src={Logo} alt="Logo" className="text-center" />
        <h3 className="text-center">WATCH</h3>
        <h6 className="text-center text-danger">SERIALS</h6>

        <h6 className="text-center">
          with the new always-on retina display. <br /> you have never seen a watch like this.
        </h6>

        <div className="links text-center">
          <a href="#">
            <h6>LEARN MORE &gt;</h6>
          </a>
          <a href="#">
            <h6>BUY &gt;</h6>
          </a>
        </div>
      </div>

      {/* Card Section */}
      <div className="col-md-6 card border">
        <div className="ezepad pt-5">
          <h3 className="text-center">Card is here.</h3>
          <h6 className="text-center">
            Get 3% Daily Cash on purchases from <br /> Apple using Apple Card.
          </h6>

          <div className="links text-center">
            <a href="#">
              <h6>LEARN MORE &gt;</h6>
            </a>
            <a href="#">
              <h6>BUY &gt;</h6>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch_and_card;
