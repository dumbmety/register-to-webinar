import Card from '../Card';
import checkLang from '../../../helpers/check-lang';

import './index.css';

const Guests = () => {
  const language = checkLang();

  return (
    <section id="guests">
      <h3>{language === 'english' ? 'Guests' : 'میهمانان'}</h3>
      <ul>
        <Card
          name={language === 'english' ? 'Lisa Alvin' : 'لیزا آلوین'}
          title={language === 'english' ? 'Cofounder, Jea' : 'بنیانگذار شرکت، ژان'}
          image="lisa-alvin.png"
        />
        <Card
          name={language === 'english' ? 'Jenny Pick' : 'جنی پیک'}
          title={language === 'english' ? 'Head of Education, Jea' : 'رئیس آموزش و پرورش، ژان'}
          image="jenny-pick.png"
        />
        <Card
          name={language === 'english' ? 'Peter Scott' : 'پیتر اسکات'}
          title={language === 'english' ? 'Founder, Jea' : 'بنیانگذار، جیا'}
          image="peter-scott.png"
        />
      </ul>
    </section>
  );
};

export default Guests;
