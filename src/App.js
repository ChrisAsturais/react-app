import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/home/home.pages.jsx';
import Authentication from './pages/authentication/authentication.pages.jsx';
import Navigation from './components/navigation/navigation.components.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
