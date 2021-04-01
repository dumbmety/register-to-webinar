import Heading from '../../Elements/Heading';
import Paragraph from '../../Elements/Paragraph';
import Time from '../../Elements/Time';

import './index.css';

const Header = () => {
  return (
    <header id="main-header">
      <Time dateTime="2021-03-17T12:00" id="time" />
      <Heading type="h1" id="title" />
      <Paragraph id="description" />
    </header>
  );
};

export default Header;
