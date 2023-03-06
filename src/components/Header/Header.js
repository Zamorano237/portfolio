/** @format */

import React from 'react';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import { setLoginGoogle } from '../../store/userSlice';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase.config';
import { MdLogout, MdAddCircleOutline, MdVerified } from 'react-icons/md';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = async () => {
    if (!user.name) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch(
        setLoginGoogle({
          name: providerData[0].displayName,
          img: providerData[0].photoURL,
          email: providerData[0].email,
          uid: providerData[0].uid,
          token: refreshToken,
        })
      );

      //set user detail in localstorage
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: providerData[0].displayName,
          img: providerData[0].photoURL,
          email: providerData[0].email,
          uid: providerData[0].uid,
          token: refreshToken,
        })
      );
    } else {
      setIsLogin((preve) => !preve);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(
      setLoginGoogle({
        name: '',
        img: '',
        email: '',
        uid: '',
        token: '',
      })
    );
    setIsLogin(false);
  };

  return (
    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <div className='brand-and-toggler flex align-center'>
                <img src={Logo} alt='logo' className='w-[100%] h-[35px] ml-5' />
                <Link to='/' className='navbar-brand flex align-center'>
                  <span className='navbar-brand-txt  fs-25 mx-2'>
                    <span className='fw-8'>NTOUCHI</span>Exotic.
                  </span>
                </Link>
              </div>
            </div>
            {user.email && (
              <div className=' flex items-center text-white-600 2xl'>
                <MdVerified className='hidden lg:block' />
                <p className='px-2 hidden lg:block'>{user.name}</p>
                {'watboparfait@gmail.com' === user.email && (
                  <p className='text-xl hidden lg:block text-white bg-gradient-to-br from-orange-400 to-orange-500  px-3 rounded-full'>
                    Admin
                  </p>
                )}
              </div>
            )}
            <div className='header-cnt-top-r'>
              <ul className='top-links flex align-center'>
                <li>
                  {/* dummy links */}
                  <a
                    href='http://wa.me/+33767864506'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='normal-case flex text-white-800'>
                    <FaWhatsapp className='text-2xl mr-2 fw-3 cursor-pointer hover:text-blue-600' />
                    Service client
                  </a>
                </li>
                <li className='vert-line'></li>
                <li className='flex align-center'>
                  <span className='fs-13'>Follow us on</span>
                  <ul className='social-links flex align-center'>
                    <li className='mx-2'>
                      <a href='www.facebook.com' className='fs-15'>
                        <i className='fab fa-facebook'></i>
                      </a>
                    </li>
                    <li className='mx-2'>
                      <a href='www.instagram.com' className='fs-15'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='vert-line'></li>
                <li>
                  <div className='relative'>
                    <div
                      whileTap={{ scale: 0.8 }}
                      onClick={handleLogin}
                      className=''>
                      {user && user.img ? (
                        <img
                          src={user.img}
                          className='w-8 h-[24px] bg-black rounded-full flex justify-center items-center cursor-pointer drop-shadow-xl shadow-lg overflow-hidden w-full h-full'
                          alt='profile'
                        />
                      ) : (
                        <>
                          <p>Log in</p>
                        </>
                      )}
                    </div>
                    {isLogin && (
                      <div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className='absolute right-0 bg-white shadow-lg top-9 p-1 rounded'>
                        <div className='arrowShow'></div>
                        <div className='rounded overflow-hidden'>
                          {'watboparfait@gmail.com' === user.email && (
                            <Link
                              to={'./createitem'}
                              onClick={() => setIsLogin(false)}
                              className='whitespace-nowrap text-black flex hover:bg-red-50 hover:text-slate-600 py-1 px-2 items-center w-full gap-3'>
                              New Item
                              <MdAddCircleOutline className='ml-auto ' />
                            </Link>
                          )}
                        </div>

                        <div className='rounded overflow-hidden z-50'>
                          <Link
                            onClick={handleLogout}
                            to={'./'}
                            className='whitespace-nowrap text-black flex hover:bg-red-50 hover:text-red-600 py-1 px-2 items-center w-full gap-3'>
                            Logout
                            <MdLogout className='ml-auto ' />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='header-cnt-bottom'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
