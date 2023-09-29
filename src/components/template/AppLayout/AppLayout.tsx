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
const AppLayout: React.FC<{
  children: React.ReactNode;
  breadcrumb: any;
  componentTitle: string;
}> = (props) => {
//   const { instance } = useMsal()
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // get from local storage
//   const authorizedUser = useSelector((state: AppStateDto) => state.auth.authorizedUser)
//   const authorizedUserRoles = useSelector((state: AppStateDto) => state.auth.authorizedUserRoles)
//   const activeUserRole = useSelector((state: AppStateDto) => state.auth.activeUserRole)

  // const [sideNavigation, setSideNavigation] = useState(true)
  // const [navClass, setNavClass] = useState('')
  //   const [open, setOpen] = React.useState(false)
  //   const [open1, setOpen1] = React.useState(false)
  //   const [roleListOpen, setRoleListOpen] = React.useState(false)

  //   const handleClickRoleList = () => {
  //     setRoleListOpen(!roleListOpen)
  //   }
  // React.useEffect(() => {
  //   if (!sideNavigation) {
  //     setNavClass('collapsed')
  //   } else {
  //     setNavClass('')
  //   }
  // }, [sideNavigation])
  //   const handleSignOut = (instance: IPublicClientApplication) => {
  //     dispatch(authActions.logout())
  //     instance.logoutRedirect().catch(e => {
  //       // eslint-disable-next-line no-console
  //       console.error('Sign-out Error', e)
  //     })
  //   }
  return (
    <React.Fragment>
      <div className={'layout-row authorizedContainer'}>
        <aside className={'layout-row sideNavigation'}>
          {/* <aside className="navBar">
            <div className={`menuBox ${navClass}`}>
              <a
                className="menuIcon"
                onClick={() => setSideNavigation(!sideNavigation)}
              >
                <span></span>
              </a>
            </div> */}
            {/* <div className={'cursorPointer profile'}>
              <span
                className={'infoCircle layout-row layout-align-center center'}
              >
                <sup>{authorizedUser.data.tag}</sup>
              </span>
              <div className="infoMenu">
              <span className={styles.activeUserRole}>{activeUserRole.data.userRoleName}</span>
              <p className="name">
                  {authorizedUser.data.firstName}{' '}
                  {authorizedUser.data.lastName}
                </p>
                <span className="email">{authorizedUser.data.username}</span>
                {authorizedUserRoles.data.length > 1 &&
                   <div
                   className={'switchRole layout-row'}
                 >
                  <div className={'layout-row'}>
                   <a onClick={handleClickRoleList}>
                     Switch Role
                   </a>
                   <ArrowRightOutlinedIcon className="switchRoleArrow" />
                   </div>
                   <div className={'roleMenu layout-row'}>
                     <List disablePadding>
                       {authorizedUserRoles.data.map(i => ({ role: i.userRoleName, key: i.userRoleKey }))
                         .map((role, index) => (
                           <div
                             key={index}
                             onClick={() => setActiveUserRole(role.key)}
                           >
                             <div className={authorizedUserRoles.data.length === index + 1 ? 'switchRoleDiv_last layout-row' : 'switchRoleDiv layout-row'}>
                               <span >{role.role} </span>
                               <br></br>
                             </div>
                           </div>
                         )
                         )}
                     </List>
                   </div>
                 </div>
                }

                { <a onClick={() => {
                  navigate(APP_ROUTES.PROFILE)
                }} >My Profile</a> }
                <a>Help</a>
                <a
                  className="signOut"
                  onClick={() => {
                    handleSignOut(instance)
                  }}
                >
                  Sign Out
                </a>
              </div>
            </div> */}
          {/* </aside> */}
          <aside className={'navBarContent'}>
            <div className="contentGroup">
              {/* <img className="logo" src={acenturaLogo} /> */}
              <h2 className={styles.h2}>Loan Management System</h2>
              <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                 to={APP_ROUTES.HOME}>
                  <DashboardOutlinedIcon />
                  Loan Management
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.PRODUCT} >
                  <BadgeOutlined />
                  Product Mangement
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.BRAND} >
                  <AccountTreeOutlinedIcon />
                  Brand Management
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink is-active' : 'navLink')}
                  to={APP_ROUTES.CATEGORY} >
                  <AccountTreeOutlinedIcon />
                  Category Management
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
