import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import English from './English';
import Farsi from './Farsi';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={English} />
        <Route path="/fa" exact component={Farsi} />
      </Switch>
    </Router>
  );
};

export default App;
