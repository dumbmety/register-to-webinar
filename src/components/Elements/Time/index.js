import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Time = ({ dateTime, id }) => {
  return (
    <time dateTime={dateTime}>
      <FormattedMessage id={id} />
    </time>
  );
};

Time.propTypes = {
  dateTime: PropTypes.string,
  id: PropTypes.string,
};

export default Time;
