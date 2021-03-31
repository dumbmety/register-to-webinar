import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default function App() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <Main />
      <Sidebar />
    </SimpleBar>
  );
}
