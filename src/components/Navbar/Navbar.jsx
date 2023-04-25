import React, { useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import decode from "jwt-decode";
// import Button from "../../components/Button/Button";
import "./Navbar.css";
import {useSelector,useDispatch} from "react-redux";
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);
  
  return (
    <nav className='main-nav'>
        <div className='navbar'>
          <Link to="/" className='nav-item nav-logo'>
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className='nav-item nav-btn'>About</Link>
          <Link to="/" className='nav-item nav-btn'>Products</Link>
          <Link to="/" className='nav-item nav-btn'>For teams</Link>
          <form>
            <input type='text' placeholder='search...'/>
            <img src={search} alt="search" width="15" className='search-icon' />
          </form>
         {User === null ? 
         <Link to="/Auth" className='nav-item nav-links'>Login</Link>:
         <>
          <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={"/User"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                 {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
         <button className='nav-item nav-links' onClick={handleLogout} >Log out</button>
         </>
        }
        </div>
    </nav>
  )
}

export default Navbar