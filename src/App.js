import './App.scss';
import React from 'react'
import Navbar from './component/Navbar';
import Search from './component/Search';
import Category from './component/Category';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Films from './component/Films';
import Details from './component/Details';
import Categorylist from './component/Categorylist';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" render={() => (
        <>
          <Search />
          <Category />
          <Films />
        </>

      )} />

      <Route path="/discover/movie/:id" render={() => (
        <>
          <Category />
          <Categorylist />
          <Films />

        </>
      )} />
      <Switch>
        <Route path="/movie/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}

export default App



