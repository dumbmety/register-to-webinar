import { FormattedMessage } from 'react-intl';
import Card from '../Card';

import './index.css';

const Guests = () => {
  return (
    <section id="guests">
      <h3>
        <FormattedMessage id="guests" />
      </h3>
      <ul>
        <Card name="lisaAlvin" title="lisaAlvinJob" image="lisa-alvin.png" />
        <Card name="jennyPick" title="jennyPickJob" image="jenny-pick.png" />
        <Card name="peterScott" title="peterScottJob" image="peter-scott.png" />
      </ul>
    </section>
  );
};

export default Guests;
