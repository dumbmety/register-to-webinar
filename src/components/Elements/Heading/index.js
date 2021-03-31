import { createElement } from 'react';

const Heading = ({ type, children }) => {
  return createElement(type, null, children);
};

export default Heading;
