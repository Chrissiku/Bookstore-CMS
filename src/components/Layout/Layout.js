import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <>
    <Navigation />
    <section>
      <Outlet />
    </section>
  </>
);

export default Layout;
