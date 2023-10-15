import { ViewMenu } from '../../components';
import React, { useEffect } from "react";
import { Footer, Header } from "../../components";
import { MenuList } from '@mui/material';
import { MenuDto } from '../../utilities/models';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../redux/actions';

const Menu = () => {
    const MenuList: MenuDto[] =  useSelector((state: any) => state.menu.userMenu.data)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(menuActions.menuData())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
        <Header />
        <ViewMenu
         menuList={MenuList || []} />       
        <Footer />
      </>
    )
  }
  
  export default Menu