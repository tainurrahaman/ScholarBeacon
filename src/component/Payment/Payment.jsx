import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Checkoutform from "./Checkoutform";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
const stripePromise = loadStripe(import.meta.env.VITE_payment_PK);

const Payment = () => {
  const location = useLocation();
  const { scholarship } = location.state || {};

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <h2 className="text-3xl my-10 text-center font-bold">Payment Here</h2>
      <div>
        <Elements stripe={stripePromise}>
          <Checkoutform state={scholarship}></Checkoutform>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
