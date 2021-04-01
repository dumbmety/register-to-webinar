import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import './index.css';

const Button = ({ id }) => {
  return (
    <button className="button">
      <FormattedMessage id={id} />
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
};

export default Button;
