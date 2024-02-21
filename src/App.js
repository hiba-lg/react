
import { Route } from 'react-router-dom';
import Navbar from "./Compenents/Navbar/Navbar";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Compenents/Footer/Footer';
import menbanner from './Compenents/Assets/image/banner_mens.png'
import womenbanner from './Compenents/Assets/image/banner_women.png'
import kidbanner from './Compenents/Assets/image/banner_kids.png'

import { BrowserRouter,Routes } from 'react-router-dom';

function App() {
  return(
<div>

<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/mens" element={<ShopCategory  banner={menbanner} category="men" /> }/>
<Route path="/womens" element={<ShopCategory banner={womenbanner} category="women" />}/>
<Route path="/kids" element={<ShopCategory banner={kidbanner}  category="kid" />}/>

</Routes>
<Footer/>
</BrowserRouter>

</div>
  );
}
export default App;


