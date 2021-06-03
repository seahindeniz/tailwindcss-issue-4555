import { Shell } from '@components';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';

import './assets/main.css';

const App = (): JSX.Element => (
  <Router>
    <Shell>
      <Routes />
    </Shell>
  </Router>
);

export default App;
