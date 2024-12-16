import React from 'react'
import Macpic from '../APPLE WEB BOOTSTRAP/img/home/macbook-pro.jpg'


 function Mac_book_pro() {
  return (
    <div>
      <section>
        <section>
            <h5 className="text-center pt-3">16-inch possible</h5>
        </section>
        <section>
            <h2 className="text-center fw-bold pt-3">MACBOOK PRO</h2>
        </section>
        <section>
            <h3 className="text-center">The best for the brightest.</h3>
        </section>
        <section className="links text-center">
            <a href="#">
                <h6>LEARN MORE  &gt;</h6>
            </a>
            <a href="#">
                <h6>BUY  &gt;</h6>
            </a>
        </section>
        <section>
            <center>
                <div className="mackbookpro">
                    <img src={Macpic} />
                </div>
            </center>
        </section>
    </section>
    </div>
  )
}
export default Mac_book_pro;