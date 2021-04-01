import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './index.css';

const Checkbox = ({ name, message }) => {
  return (
    <div className="checkbox">
      <input id={name} type="checkbox" name={name} />
      <label htmlFor={name}>
        <FormattedMessage id={message} />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
};

export default Checkbox;
