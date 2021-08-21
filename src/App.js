import './App.css';
import Navbar from '../src/components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Paintings from './components/pages/Paintings';
import About from './components/pages/About';
import Abstract_1 from './components/pages/Watercolors/Abstract_1';
import Abstract_2 from './components/pages/Watercolors/Abstract_2';
import Abstract_3 from './components/pages/Watercolors/Abstract_3';
import Abstract_4 from './components/pages/Watercolors/Abstract_4';
import Abstract_5 from './components/pages/Watercolors/Abstract_5';
import Abstract_6 from './components/pages/Watercolors/Abstract_6';
// properly configures p pages (im using the layout system)
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';

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
        {/* ADDING ROUTES FOR PRODUCT PAGES */}
        <Route path = '/Abstract_1' component={ Abstract_1 }/>
        <Route path = '/Abstract_2' component={ Abstract_2 }/>
        <Route path = '/Abstract_3' component={ Abstract_3 }/>
        <Route path = '/Abstract_4' component={ Abstract_4 }/>
        <Route path = '/Abstract_5' component={ Abstract_5 }/>
        <Route path = '/Abstract_6' component={ Abstract_6 }/>
      </Switch>
      </Router>
    </>

  );
}

export default App;
