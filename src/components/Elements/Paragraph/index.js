import PropTypes from 'prop-types';

const Paragraph = ({ children }) => {
  return <p>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string,
};

export default Paragraph;
