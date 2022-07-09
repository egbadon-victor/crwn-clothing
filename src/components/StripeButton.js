import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LJkkYDlBVwPYX0SqEE8RyiNj4FrIxVyug4qBCE4QYPopjP8XR33pQCI2W5uLZORk3i8K5sbLDaJyM3xvEInuZoG00kNgetMP4";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
