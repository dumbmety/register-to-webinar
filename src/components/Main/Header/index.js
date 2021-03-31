import Heading from '../../Elements/Heading';
import Paragraph from '../../Elements/Paragraph';
import Time from '../../Elements/Time';

import checkLang from '../../../helpers/check-lang';

import './index.css';

const Header = () => {
  const language = checkLang();

  return (
    <header id="main-header">
      <Time dateTime="2021-03-17T12:00">
        {language === 'english' ? 'March 17, 2021 12:00' : '17 خرداد 1400 ساعت 12:00'}
      </Time>
      <Heading type="h1">
        {language === 'english'
          ? 'The help of Augmented Reality and Holograms.'
          : 'کمک واقعیت افزوده و هولوگرام.'}
      </Heading>
      <Paragraph>
        {language === 'english'
          ? 'Use Augmented Reality to keep students engaged and provide detailed explanations of models and course material. In a 3D, AR Lab, students can pinch, zoom, and rotate equipment related to the course, for a fully immersive learning experienc.'
          : 'برای درگیر کردن دانشجویان و ارائه توضیحات دقیق درباره مدلها و مطالب درسی ، از واقعیت افزوده استفاده کنید. در یک آزمایشگاه 3D ، AR ، دانش آموزان می توانند تجهیزات مربوط به دوره را خرج کنند ، بزرگنمایی کنند و بچرخانند ، تا یک تجربه یادگیری کاملاً غوطه وری داشته باشند.'}
      </Paragraph>
    </header>
  );
};

export default Header;
