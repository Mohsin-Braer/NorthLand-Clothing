import { Fragment, useContext } from "react";  //If you don't wanna use a div as the parent tag you can use a Fragment which doesn't render any unnecessary div html if empty
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, NavLinks, LogoContainer, NavLink } from "./navigation.styles";



const Navigation = () => {

    const {currentUser} = useContext(UserContext); //useContext rerenders component every time an update is made (lifecycle) 
    const {isOpen} = useContext(CartContext);

    return (
        <Fragment>
          <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className='logo' />
            </LogoContainer>
            <NavLinks>
              <NavLink to='/shop'>
                SHOP
              </NavLink>
    
              {currentUser ? (
                <NavLink as='span' onClick={signOutUser}>
                  SIGN OUT
                </NavLink>
              ) : (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )}
              <CartIcon />
            </NavLinks>
            {isOpen && <CartDropdown />}
          </NavigationContainer>
          <Outlet />
        </Fragment>
      );
    };
    
    export default Navigation;