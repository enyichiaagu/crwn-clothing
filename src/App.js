import { Routes, Route } from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path="shop" element={<ShopPage/>}/>
        <Route path="signin" element={<SignInAndSignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
