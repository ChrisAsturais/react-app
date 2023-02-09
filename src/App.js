import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils.js';
import { setCurrentUser } from './store/user/user.action.js';

import Home from './pages/home/home.pages.jsx';
import Authentication from './pages/authentication/authentication.pages.jsx';
import Shop from './pages/shop/shop.pages.jsx';

import Navigation from './components/navigation/navigation.components.jsx';
import Checkout from './pages/checkout/checkout.component.jsx';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribre = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribre;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
