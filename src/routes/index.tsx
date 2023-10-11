import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APP_ROUTES } from '../utilities/constants'
import {CustomerHome, Home, Login, Product, Register,Prediction } from '../pages'
import UserHome from '../pages/UserHome/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact.tsx/Contact'
import PageNotFound from '../pages/NotFound/NotFound'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROOT} Component={Login} />
            <Route path={APP_ROUTES.REGISTER} Component={Register} />
            <Route path={APP_ROUTES.HOME} Component={Home} />
            <Route path={APP_ROUTES.HOUSE} Component={Product} />
            <Route path={APP_ROUTES.CUSTOMER_HOME} Component={CustomerHome} />
            <Route path={APP_ROUTES.UserHome} Component={UserHome} />
            <Route path={APP_ROUTES.About} Component={About} />
            <Route path={APP_ROUTES.Conatct} Component={Contact} />
            <Route path={APP_ROUTES.PageNotFound} Component={PageNotFound} />
            <Route path={APP_ROUTES.Prediction} Component={Prediction} />
            <Route path={APP_ROUTES.SignIn} Component={Prediction} />
            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes