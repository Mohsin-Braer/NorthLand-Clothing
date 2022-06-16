import { Fragment } from "react";  //If you don't wanna use a div as the parent tag you can use a Fragment which doesn't render any unnecessary div html if empty
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';


const Navigation = () => {
    
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>  
                    SHOP                      
                </Link>
            </div>
            <div className="nav-links-container">
                <Link className="nav-link" to='/auth'>  
                    SIGN IN                      
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }

  export default Navigation;