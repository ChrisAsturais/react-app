import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/home/home.pages.jsx';
import SignIn from './pages/sign-in/sign-in.pages.jsx';
import Navigation from './components/navigation/navigation.components.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
