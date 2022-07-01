import { Routes, Route } from 'react-router-dom'

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path="shop" element={<ShopPage/>}/>
          <Route path="signin" element={<SignInAndSignUpPage/>}/>
        </Routes>
      </div>
    );
  };
}

export default App;
