/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/cartSlice';
import { formatPrice } from '../../utils/helpers';
import './Product.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = 1 * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: 1, totalPrice, discountedPrice })
    );
  };
  return (
    <>
      <div className='product-item  bg-white '>
        <div className='category '>{product?.category}</div>
        <Link to={`/product/${product?.id}`} key={product?.id}>
          <div className='product-item-img'>
            <img
              className='img-cover'
              src={product?.images[0]}
              alt={product.title}
            />
          </div>
          <div className='product-item-info fs-14'>
            <div className='brand'>
              <span>Brand: </span>
              <span className='fw-7'>{product?.brand}</span>
            </div>
            <div className='title py-2'>{product?.title}</div>
            <div className='price flex align-center justify-center'>
              <span className='old-price'>{formatPrice(product?.price)}</span>
              <span className='new-price'>
                {formatPrice(product?.discountedPrice)}
              </span>
              <span className='discount hidden lg:block fw-6 '>
                ({product?.discountedPercentage}% Off)
              </span>
            </div>
          </div>
        </Link>
        <button
          type='button'
          className='h-[40px] bg-orange-600 py-1 relative bottom-0 border-2 border-solid  w-full  hover:bg-blue-600 hover:text-white font-semibold rounded  text-white '>
          <i className='fas fa-shopping-cart'></i>
          <span
            className='btn-text mx-2'
            onClick={() => {
              addToCartHandler(product);
            }}>
            Ajoutez au panier
          </span>
        </button>
      </div>
    </>
  );
};

export default Product;
