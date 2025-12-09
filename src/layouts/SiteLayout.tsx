import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { SkipLink } from '../components/SkipLink';

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <SkipLink /> */}
      <Header />
      <main id="main-content" className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

