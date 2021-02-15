import './App.css';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Promobar from './components/promobar/Promobar';
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App =() => {
  return (
    <>
      <Promobar />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
