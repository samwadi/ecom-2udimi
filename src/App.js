import './App.css';
import React from 'react';
import HomePage from './pages/home.page.components/homepage.components'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';




class App extends React.Component {
  render(){
  return(
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/' component={ShopPage} />
    </Switch>
  </div>
  );
}
}

export default App;
