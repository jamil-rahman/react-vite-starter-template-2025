import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Bookings } from './pages/Bookings';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
