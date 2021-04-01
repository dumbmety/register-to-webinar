import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Arabic from './Arabic';
import English from './English';
import Farsi from './Farsi';

import arabicMessages from '../translations/ar.json';
import englishMessages from '../translations/en.json';
import farsiMessages from '../translations/fa.json';

const App = () => {
  const [locale, setLocale] = useState(window.location.pathname.split('/')[1]);

  const changeLang = name => {
    setLocale(name);
  };

  let messages;
  switch (locale) {
    case '':
      messages = englishMessages;
      break;
    case 'fa':
      messages = farsiMessages;
      break;
    case 'ar':
      messages = arabicMessages;
      break;
    default:
      break;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <English changeLang={changeLang} />
          </Route>
          <Route path="/fa">
            <Farsi changeLang={changeLang} />
          </Route>
          <Route path="/ar">
            <Arabic changeLang={changeLang} />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default App;
