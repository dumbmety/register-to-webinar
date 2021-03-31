import PropTypes from 'prop-types';
import './index.css';

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
