import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import './index.css';

const Footer = () => {
  return (
    <footer id="main-footer">
      <Link to="/">
        <FormattedMessage id="english" />
      </Link>
      <Link to="/fa">
        <FormattedMessage id="farsi" />
      </Link>
    </footer>
  );
};

export default Footer;
