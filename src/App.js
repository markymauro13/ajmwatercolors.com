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
import AJ_1 from './components/pages/Watercolors/AJ_1';
import AJ_2 from './components/pages/Watercolors/AJ_2';
import America from './components/pages/Watercolors/America';
import Asbury_1 from './components/pages/Watercolors/Asbury_1';
import Asbury_2 from './components/pages/Watercolors/Asbury_2';
import Asbury_3 from './components/pages/Watercolors/Asbury_3';
import Asbury_4 from './components/pages/Watercolors/Asbury_4';
import Asbury_5 from './components/pages/Watercolors/Asbury_5';
import Asbury_6 from './components/pages/Watercolors/Asbury_6';
import Asbury_Life from './components/pages/Watercolors/Asbury_Life';
import Avon_1 from './components/pages/Watercolors/Avon_1';
import Avon_2 from './components/pages/Watercolors/Avon_2';
import Balcony from './components/pages/Watercolors/Balcony';
import Balls from './components/pages/Watercolors/Balls';
import BelmarBridge from './components/pages/Watercolors/BelmarBridge';
import Bermuda from './components/pages/Watercolors/Bermuda';
import Birch_1 from './components/pages/Watercolors/Birch_1';
import Birch_2 from './components/pages/Watercolors/Birch_2';
import Bluejays from './components/pages/Watercolors/Bluejays';
import Bluewhale from './components/pages/Watercolors/Bluewhale';
import CardsPainting from './components/pages/Watercolors/CardsPainting';
import Boat_1 from './components/pages/Watercolors/Boat_1';
import Boat_2 from './components/pages/Watercolors/Boat_2';
import Boat_3 from './components/pages/Watercolors/Boat_3';
import Cosmos_Queen from './components/pages/Watercolors/Cosmos_Queen';
import Butterflys from './components/pages/Watercolors/Butterflys';
import Flowers from './components/pages/Watercolors/Flowers';
import Allegience from './components/pages/Watercolors/Allegience';

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
        <Route path = '/AJ_1' component={ AJ_1 }/>
        <Route path = '/AJ_2' component={ AJ_2 }/>
        <Route path = '/America' component={ America }/>
        <Route path = '/Asbury_1' component={ Asbury_1 }/>
        <Route path = '/Asbury_2' component={ Asbury_2 }/>
        <Route path = '/Asbury_3' component={ Asbury_3 }/>
        <Route path = '/Asbury_4' component={ Asbury_4 }/>
        <Route path = '/Asbury_5' component={ Asbury_5 }/>
        <Route path = '/Asbury_6' component={ Asbury_6 }/>
        <Route path = '/Asbury_Life' component={ Asbury_Life }/>
        <Route path = '/Avon_1' component={ Avon_1 }/>
        <Route path = '/Avon_2' component={ Avon_2 }/>
        <Route path = '/Balcony' component={ Balcony }/>
        <Route path = '/Balls' component={ Balls }/>
        <Route path = '/BelmarBridge' component={ BelmarBridge }/>
        <Route path = '/Bermuda' component={ Bermuda }/>
        <Route path = '/Birch_1' component={ Birch_1 }/>
        <Route path = '/Birch_2' component={ Birch_2 }/>
        <Route path = '/Bluejays' component={ Bluejays }/>
        <Route path = '/Bluewhale' component={ Bluewhale }/>
        <Route path = '/CardsPainting' component={ CardsPainting }/>
        <Route path = '/Boat_1' component={ Boat_1 }/>
        <Route path = '/Boat_2' component={ Boat_2 }/>
        <Route path = '/Boat_3' component={ Boat_3 }/>
        <Route path = '/Cosmos_Queen' component={ Cosmos_Queen }/>
        <Route path = '/Butterflys' component={ Butterflys }/>
        <Route path = '/Flowers' component={ Flowers }/>
        <Route path = '/Allegience' component={ Allegience }/>
      </Switch>
      </Router>
    </>

  );
}

export default App;
