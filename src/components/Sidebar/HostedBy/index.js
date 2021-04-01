import { FormattedMessage } from 'react-intl';
import Card from '../Card';

import './index.css';

const HostedBy = () => {
  return (
    <section id="hosted-by">
      <h3>
        <FormattedMessage id="hostedBy" />
      </h3>
      <Card name="joshJacob" title="joshJacobJob" image="josh-jacob.png" />
    </section>
  );
};

export default HostedBy;
