/** @format */

import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { setSidebarOn } from '../../store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from '../../store/cartSlice';
import CartModal from '../CartModal/CartModal';

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts, dispatch]);

  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div>
          <button
            type='button'
            className='sidebar-show-btn text-white flex-start'
            onClick={() => dispatch(setSidebarOn())}>
            <i className='fas fs-25 fa-bars'></i>
            <p className='text-base'>Catalogue</p>
          </button>
        </div>
        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input
                type='text'
                className='form-control fs-14'
                placeholder='Recherchez vos produits ici'
                onChange={(e) => handleSearchTerm(e)}
              />
              <Link
                to={`search/${searchTerm}`}
                className='text-white search-btn flex align-center justify-center'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </div>
          </div>

          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
            {
              // taking only first 8 categories
              categories.slice(0, 8).map((category, idx) => (
                <li className='nav-item no-wrap' key={idx}>
                  <Link
                    to={`category/${category}`}
                    className='nav-link text-capitalize'>
                    {category.replace('-', ' ')}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='navbar-cart flex align-center'>
          <Link to='/cart' className='cart-btn'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='cart-items-value'>{itemsCount}</div>
            <CartModal carts={carts} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
