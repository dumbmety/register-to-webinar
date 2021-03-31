import PropTypes from 'prop-types';

import './index.css';

const Input = ({ title, type, name, placeholder }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{title}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
