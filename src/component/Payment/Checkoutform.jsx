import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Checkoutform = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const axiosPublic = UseAxiosPublic();
  const [error, setError] = useState("");
  const { scholarship } = location.state || {};

  //   useEffect(() => {
  //     axiosPublic.post("/create-payment-intent");
  //   }, [scholarship]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast("payment error", error.message);
      setError(error.message);
    } else {
      toast("payment method", paymentMethod);
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="btn btn-primary my-5"
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
      </form>
    </div>
  );
};

export default Checkoutform;
