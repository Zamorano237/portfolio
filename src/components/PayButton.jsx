/** @format */
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { url } from '../utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PayButton = ({ carts }) => {
  const user = useSelector((state) => state.user);

  const handleCheckout = () => {
    if (user.email) {
      axios
        .post(`${url}/stripe/create-checkout-session`, {
          carts,
          userEmail: user.email,
        })
        .then((response) => {
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log(err.message));
      toast.info(
        'Vous serez dirigé vers stripe pour effectuer le paiement...',
        {
          position: 'top-center',
          autoClose: 20000,
        }
      );
    } else {
      toast.error('Connectez vous premierement pour effectuer le paiement', {
        position: 'top-center',
      });
    }
  };

  return (
    <>
      <button
        onClick={() => handleCheckout()}
        className=' h-[40px] bg-orange-600 py-1  border-2 border-solid  w-full  hover:bg-blue-600  font-semibold rounded  text-white'>
        Validez la commande
      </button>
    </>
  );
};

export default PayButton;
