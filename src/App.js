import './App.css';
import Navbar from '../src/components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Paintings from './components/pages/Paintings';
import About from './components/pages/About';
import Abstract_1 from './components/pages/Watercolors/Abstract_1';
// properly configures p pages (im using the layout system)
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
    
      <Navbar />
      <Switch>
        <Route path = '/' exact component={ Home } />
        <Route path = '/paintings' component={ Paintings }/>
        <Route path = '/about' component={ About }/>
        <Route path = '/Abstract_1' component={ Abstract_1 }/>
      </Switch>
      </Router>
      <Footer/>
    </>

  );
}

export default App;
