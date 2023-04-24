import React, { useState } from 'react'
import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from './AboutAuth';
import { signup, login } from "../../actions/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const[isSignUp,setIsSignUp] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignUp(!isSignUp)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!email && !password) {
        alert("Enter email and password");
      }
      if (isSignUp) {
        if (!name) {
          alert("Enter a name to continue");
        }
        dispatch(signup({ name, email, password }, navigate));
      } else {
        dispatch(login({ email, password }, navigate));
      }
    };


  return (
    <section className='auth-section'>
        {isSignUp && <AboutAuth />}
        <div className='auth-container-2'>
          {!isSignUp && <img src={icon} alt="stack overflow logo" className='login-logo'  />}
          <form  onSubmit={handleSubmit}>
            {
                isSignUp && (
                    <label htmlFor='name'>
                      <h4>Display name</h4>
                      <input type='text' id='name' name='name'  onChange={(e) => {
                  setName(e.target.value);
                }} />
                    </label>
                )
            }
            <label htmlFor='email'>
              <h4>Email</h4>
              <input type='email' name="email" id="email"   onChange={(e) => {
                setEmail(e.target.value);
              }} />
            </label>
            <label htmlFor='password'>
             <div style={{display : "flex",justifyContent:"space-between" }}>
             <h4>Password</h4>
            { !isSignUp && <p style={{color : "blue",fontSize:"13px"}} > Forget Password?</p>}
             </div>             
              <input type='password' name="password" id="password"   onChange={(e) => {
                setPassword(e.target.value);
              }}/>
              {isSignUp && <p style={{color : "#666767",fontSize:"13px"}}>Passoword must contain atleast eight<br/> characters including atleast 1 letter and <br/> 1 number</p>}
            </label>
            {isSignUp && (
                <label htmlFor='check'>
                    <input type='checkbox' id='check' name='check' />
                    <p style={{fontSize:"13px"}}>
                        opt in to receive occasional,<br />
                        product invitations,user research invitations<br />
                        company announcements and digests.
                    </p>
                </label>
            )}
            <button type='submit' className='auth-btn'>{isSignUp ? "signup" : "Login"}</button>
            {isSignUp && (
                <p style={{color : "#666767",fontSize:"13px"}}>
                    By clicking "signup" you agree to our
                    <span style={{color : "blue"}}>Terms & <br/>conditions</span>,
                    <span style={{color : "blue"}}>Privacy policy</span>and
                    <span style={{color : "blue"}}>Cookie policy</span>
                </p>
            )}
          </form>
          <p>
            {isSignUp ? "already have an account?" : "Don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignUp ? "Login" : "sign up"}</button>
          </p>
        </div>
    </section>
  )
}

export default Auth