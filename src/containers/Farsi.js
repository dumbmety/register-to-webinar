import { useEffect } from 'react';
import Helmet from 'react-helmet';
import SimpleBar from 'simplebar-react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Farsi = ({ changeLang }) => {
  useEffect(() => {
    document.querySelector('html').dir = 'rtl';
    changeLang('fa');
  });

  return (
    <>
      <Helmet>
        <title>ثبت نام در وبینار</title>
        <meta property="og:title" content="کمک واقعیت افزوده و هولوگرام." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://register-to-webinar.netlify.app" />
        <meta
          property="og:image"
          content="https://register-to-webinar.netlify.app/img/screenshot.png"
        />
        <meta
          property="og:description"
          content="برای درگیر کردن دانشجویان و ارائه توضیحات دقیق درباره مدلها و مطالب درسی ، از واقعیت افزوده استفاده کنید. در یک آزمایشگاه 3D ، AR ، دانش آموزان می توانند تجهیزات مربوط به دوره را خرج کنند ، بزرگنمایی کنند و بچرخانند ، برای یک تجربه یادگیری کاملاً غوطه وری"
        />
      </Helmet>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <div className="layout">
          <Main />
          <Sidebar />
        </div>
      </SimpleBar>
    </>
  );
};

export default Farsi;
