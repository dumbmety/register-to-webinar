import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const App = () => {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <div className="layout">
        <Main />
        <Sidebar />
      </div>
    </SimpleBar>
  );
};

export default App;
