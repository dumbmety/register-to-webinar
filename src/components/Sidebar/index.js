import Share from './Share';
import Guests from './Guests';
import HostedBy from './HostedBy';

import './index.css';

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <div>
        <Share />
        <Guests />
        <HostedBy />
      </div>
    </aside>
  );
}
