import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APP_ROUTES } from '../utilities/constants'
import { Brand, Category, CustomerHome, Home, Login, Product, Register } from '../pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROOT} Component={Login} />
            <Route path={APP_ROUTES.REGISTER} Component={Register} />
            <Route path={APP_ROUTES.HOME} Component={Home} />
            <Route path={APP_ROUTES.HOUSE} Component={Product} />
            <Route path={APP_ROUTES.BRAND} Component={Brand} />
            <Route path={APP_ROUTES.CATEGORY} Component={Category} />
            <Route path={APP_ROUTES.CUSTOMER_HOME} Component={CustomerHome} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes