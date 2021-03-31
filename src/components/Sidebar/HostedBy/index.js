import Card from '../Card';
import checkLang from '../../../helpers/check-lang';

import './index.css';

const HostedBy = () => {
  const language = checkLang();

  return (
    <section id="hosted-by">
      <h3>{language === 'english' ? 'Hosted by' : 'میزبان'}</h3>
      <Card
        name={language === 'english' ? 'Josh Jacob' : 'جاش جیکوب'}
        title={language === 'english' ? 'Educator, Web' : 'مربی، وب'}
        image="josh-jacob.png"
      />
    </section>
  );
};

export default HostedBy;
