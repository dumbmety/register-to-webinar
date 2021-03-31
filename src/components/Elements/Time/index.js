import PropTypes from 'prop-types';

const Time = ({ dateTime, children }) => {
  return <time dateTime={dateTime}>{children}</time>;
};

Time.propTypes = {
  dateTime: PropTypes.string,
  children: PropTypes.string,
};

export default Time;
