import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
 
import STRIPE_PUBLISHABLE from './stripe';
import PAYMENT_SERVER_URL from './server';
 
const CURRENCY = 'EUR';
 
const fromEuroToCent = amount => amount * 100;
 
const successPayment = data => {
  alert('Payment Successful');
};
 
const errorPayment = data => {
  alert('Payment Error');
};
 
const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
 
const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
 
export default Checkout;