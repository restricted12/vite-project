import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Header from '../src/components/Header/Header.jsx';
import Mac_book_pro from '../src/components/Mac Book pro/mac-book-pro.jsx';
import Iphone_11_pro from '../src/components/iphone 11 pro/i phone-11-pro.jsx';
import Iphone_11 from '../src/components/iphone 11/i phone 11.jsx';
import Watch_and_card from '../src/components/watch and card/watch_and_card.jsx';
import Tv_and_airpod from '../src/components/Tv and airpod/Tv_and _airpod.jsx';
import Macbook_and_card from '../src/components/macbook and card/macbook_and_card.jsx';
import Footer from '../src/components/footer/footer.jsx';
import Youtube from '../src/components/Youtube/youtube.jsx';

// importing routers


import Ipad from '../src/routers/Ipad/Ipad.jsx'
import Iphone from '../src/routers/iphone/iphone.jsx';
import Mac from '../src/routers/Mac/Mac.jsx';
import Music from '../src/routers/Music/music.jsx';
import Services from '../src/routers/Services/services.jsx';
import Tv from '../src/routers/Tv/Tv.jsx';
import Watch from '../src/routers/Watch/Watch.jsx'
import E404 from '../src/routers/Eroor/404.jsx'
import Productpage from './routers/product page/productpage.jsx';




function App() {
  return (
    <div>
      {/* Header is always displayed */}
      <Header />

      {/* Router for handling routing */}
      <Router>
        <Routes>
          {/* Render all components when the user is on the root path ("/") */}
          <Route
            path="/main"
            element={
              <div>
                <Mac_book_pro />
                <Iphone_11_pro />
                <Iphone_11 />
                <Watch_and_card />
                <Tv_and_airpod />
                <Macbook_and_card />
                <Youtube />
              </div>
            }
          />
          <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad/>} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/music" element={<Music />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/iphone/:pid" element={Productpage} /> */}
        {/* Error Page for Undefined Routes */}
        <Route path="*" element={<E404 />} />

        </Routes>
        



      </Router>

      {/* Footer is always displayed */}
      <Footer />
    </div>
  );
}

export default App;
