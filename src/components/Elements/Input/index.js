import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import './index.css';

const Input = ({ title, type, name, placeholder, intl }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>
        <FormattedMessage id={title} />
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={intl.formatMessage({ id: placeholder })}
      />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default injectIntl(Input);
