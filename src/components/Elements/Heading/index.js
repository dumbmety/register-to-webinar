import { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ type, children }) => {
  return createElement(type, null, children);
};

Heading.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element,
};

export default Heading;
