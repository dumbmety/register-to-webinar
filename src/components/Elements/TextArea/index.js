import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import './index.css';

const TextArea = ({ title, name, placeholder }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>
        <FormattedMessage id={title} />
      </label>
      <textarea id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

TextArea.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextArea;
