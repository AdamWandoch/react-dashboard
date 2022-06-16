import { Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './routes/home/Home';
import { Dashboard } from './routes/dashboard/Dashboard';
import { Contact } from './routes/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Error } from './components/error/Error';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
