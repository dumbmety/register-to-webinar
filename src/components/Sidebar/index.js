import Share from './Share';
import Guests from './Guests';
import HostedBy from './HostedBy';
import Footer from './Footer';

import './index.css';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div>
        <Share />
        <Guests />
        <HostedBy />
        <Footer />
      </div>
    </aside>
  );
};

export default Sidebar;
