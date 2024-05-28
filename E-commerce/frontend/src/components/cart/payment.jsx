import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import './PaymentForm.css'; 

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        email,
        address: {
          line1: address,
        },
      },
    });

    if (error) {
      console.log('[error]', error);
      toast.error('Payment failed. Please try again.');
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      toast.success('Payment successful!');
      // Here, I would send the paymentMethod.id and totalPrice to a server to process the payment
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Payment Details</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-element">Credit or Debit Card</label>
        <CardElement id="card-element" />
      </div>
      <div className="form-group">
        <h3>Total: ${totalPrice}</h3>
      </div>
      <button id='btn' type="submit" disabled={!stripe}>
        Pay ${totalPrice}
      </button>
    </form>
  );
};

export default PaymentForm;
