import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

function Navigation() {
  const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
  return (
    <div className="header">
        <div>
            <div className="row bg-success">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink end activeclassname='is-active' to="/">
                        <img src="/assets/images/logonew_verysmall.png" alt="Online IT courses with live classes" /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav" >
        {/* Responsive Menu Button */}
        {isResponsiveclose === true ? <> 
         <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
         </> : <> 
         <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
         </>}
        
            <ul className={boxClass.join(' ')}>
              <li className="menu-item">
                <NavLink end activeclassname='is-active' onClick={toggleClass} to="/about" className='text-white'>
                  About
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink end activeclassname='is-active' onClick={toggleClass} to="/whyus" className='text-white'>
                  Why Us
                </NavLink>
              </li>
              <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
              <Link to="OnlineCourses" className='text-white'> Courses <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li><NavLink onClick={toggleClass} activeclassname='is-active'  to={`/java-springboot-live-onlinecourses`} className='text-white'> Java Spring Boot </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeclassname='is-active' to={`/angular-reactjs-live-onlinecourses`} className='text-white'> Front End Techs </NavLink> </li>
                        </ul>
                    </li>
              <li className="menu-item">
                <NavLink end activeclassname='is-active' onClick={toggleClass} to="/blog" className='text-white'>
                  Blog
                </NavLink>
              </li>
            </ul>
            </nav>     
                </div>   
            </div>
	    </div>
    </div>
  );
}

export default Navigation;
