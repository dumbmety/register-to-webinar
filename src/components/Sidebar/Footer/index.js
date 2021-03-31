import { Link } from 'react-router-dom';
import './index.css';

const Footer = () => {
  return (
    <footer id="main-footer">
      <Link to="/">English</Link>
      <Link to="/fa">Farsi</Link>
    </footer>
  );
};

export default Footer;
