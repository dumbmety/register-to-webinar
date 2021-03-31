import Heading from '../../Elements/Heading';
import Time from '../../Elements/Time';
import Paragraph from '../../Elements/Paragraph';

import './index.css';

const Header = () => {
  return (
    <header id="main-header">
      <Time dateTime="2021-03-17T12:00">March 17, 2021 12:00</Time>
      <Heading type="h1">The help of Augmented Reality and Holograms.</Heading>
      <Paragraph>
        Use Augmented Reality to keep students engaged and provide detailed explanations of models
        and course material. In a 3D, AR Lab, students can pinch, zoom, and rotate equipment related
        to the course, for a fully immersive learning experienc.
      </Paragraph>
    </header>
  );
};

export default Header;
