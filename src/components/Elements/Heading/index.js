import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Heading = ({ type, id }) => {
  let element;
  switch (type) {
    case 'h1':
      element = (
        <h1>
          <FormattedMessage id={id} />
        </h1>
      );
      break;
    case 'h2':
      element = (
        <h2>
          <FormattedMessage id={id} />
        </h2>
      );
      break;
    case 'h3':
      element = (
        <h3>
          <FormattedMessage id={id} />
        </h3>
      );
      break;
    default:
      break;
  }

  return element;
};

Heading.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Heading;
