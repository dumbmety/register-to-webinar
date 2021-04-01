import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Paragraph = ({ id }) => {
  return (
    <p>
      <FormattedMessage id={id} />
    </p>
  );
};

Paragraph.propTypes = {
  id: PropTypes.string,
};

export default Paragraph;
