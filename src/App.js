import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './routes/home/Home';
import { Dashboard } from './routes/dashboard/Dashboard';
import { Contact } from './routes/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Error } from './components/error/Error';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
