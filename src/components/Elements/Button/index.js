import PropTypes from 'prop-types';

import './index.css';

const Button = ({ children }) => {
  return <button className="btn-light">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.element,
};

export default Button;
