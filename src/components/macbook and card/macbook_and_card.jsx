import React from 'react';
import Mac_img from '../APPLE WEB BOOTSTRAP/img/home/macbook-pro.jpg';

function Macbook_and_card() {
  return (
    <div>
      <section className="mt-4 watchcard row">
        <div className="mac border d-lg-block col-md-6">
          <h5 className="text-center poss">16-inch possible</h5>

          <section>
            <h2 className="text-center fw-bold pt-3">MACBOOK PRO</h2>
          </section>
          <section>
            <h3 className="text-center">The best for the brightest.</h3>
          </section>

          <div className="links text-center">
            <a href="#">
              <h6>LEARN MORE &gt;</h6>
            </a>
            <a href="#">
              <h6>BUY  &gt;</h6>
            </a>
          </div>

          <center>
            <img src={Mac_img} alt="MacBook Pro" className="my-3" />
          </center>
        </div>

        <div className="col-md-6 ipad border">
          <div className="ezepad pt-5">
            <h3 className="text-center">Card is here.</h3>
            <h6 className="text-center">
              Get 3% Daily Cash on purchases from <br />Apple using Apple Card.
            </h6>

            <div className="links text-center">
              <a href="#">
                <h6>LEARN MORE &gt;</h6>
              </a>
              <a href="#">
                <h6>BUY  &gt;</h6>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Macbook_and_card;
