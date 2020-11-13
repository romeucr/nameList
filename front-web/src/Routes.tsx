import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { BrowserRouter, Route } from 'react-router-dom'
import SiteHeader from './core/components/SiteHeader'
import Home from './pages/Home'
import Search from './pages/Search'


const Routes = () => (
   <BrowserRouter>
      <SiteHeader />
      <Switch>
         <Route path="/" exact>
            <Home />
         </Route>

         <Route path="/search" exact>
            <Search />
         </Route>
      </Switch>

   </BrowserRouter>   
)

export default Routes