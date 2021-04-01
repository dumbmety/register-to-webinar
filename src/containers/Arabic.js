import { useEffect } from 'react';
import Helmet from 'react-helmet';
import SimpleBar from 'simplebar-react';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Arabic = ({ changeLang }) => {
  useEffect(() => {
    document.querySelector('html').dir = 'rtl';
    changeLang('ar');
  });

  return (
    <>
      <Helmet>
        <title>سجل في الندوة عبر الإنترنت</title>
        <meta property="og:title" content="مساعدة الواقع المعزز والصور المجسمة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://register-to-webinar.netlify.app" />
        <meta
          property="og:image"
          content="https://register-to-webinar.netlify.app/img/screenshot.png"
        />
        <meta
          property="og:description"
          content="استخدم الواقع المعزز للحفاظ على تفاعل الطلاب وتقديم تفسيرات مفصلة للنماذج ومواد الدورة التدريبية. في معمل الواقع المُعزز ثلاثي الأبعاد ، يمكن للطلاب الضغط على المعدات المتعلقة بالدورة التدريبية وتكبيرها / تصغيرها وتدويرها ، للحصول على تجربة تعليمية غامرة تمامًا."
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

export default Arabic;
