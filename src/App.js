import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.pages.jsx';
import Authentication from './pages/authentication/authentication.pages.jsx';
import Navigation from './components/navigation/navigation.components.jsx';
import Shop from './pages/shop/shop.pages.jsx';

import Checkout from './pages/checkout/checkout.component.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
