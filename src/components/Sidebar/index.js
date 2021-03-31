import Share from './Share';
import Guests from './Guests';
import HostedBy from './HostedBy';

import './index.css';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div>
        <Share />
        <Guests />
        <HostedBy />
      </div>
    </aside>
  );
};

export default Sidebar;
