// import {
//   acenturaLogo
// } from '../../../assets/images'
import {
  APP_ROUTES
} from '../../../utilities/constants'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import React from 'react'
import styles from './AppLayout.module.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import { BadgeOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { Divider } from '@mui/material'
import { loginActions } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
const AppLayout: React.FC<{
  children: React.ReactNode;
  breadcrumb: any;
  componentTitle: string;
}> = (props) => {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <div className={'layout-row authorizedContainer'}>
        <aside className={'layout-row sideNavigation'}>
          <aside className={'navBarContent'}>
            <div className="contentGroup">
              <h2 className={styles.h2}>House Prediction System</h2>
              <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                 to={APP_ROUTES.HOME}>
                  <DashboardOutlinedIcon />
                  House Prediction
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.HOUSE} >
                  <BadgeOutlined />
                  House Details
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.AddHouse} >
                  <BadgeOutlined />
                  Add New House
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.Prediction} >
                  <BadgeOutlined />
                  Prediction
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.UserHome}  onClick={() => {dispatch(loginActions.signInUserClear())}}>
                  <BadgeOutlined />
                  LogOut
                </NavLink>
            
                </div>
          </aside>
        </aside>
        <aside className="content">
          <h1>{props.componentTitle}</h1>
          <Divider />
          {props.children}
        </aside>
      </div>
    </React.Fragment>
  )
}

export default AppLayout
