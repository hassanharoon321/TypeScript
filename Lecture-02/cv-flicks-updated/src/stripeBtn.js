



// import React from 'react';
import axios from 'axios';
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useLocation } from "react-router-dom"

const MStripe = (props) => {
  const search = useLocation().search;
  const compIds = new URLSearchParams(search).get("id");
  const onToken = (token, addresses) => {
    var data =
    {
      "pkg_id": props.id !== null ? props.id : null,
      "costumer_id": token ? token.card ? token.card.id !== null && token.card.id !== undefined ? token.card.id : null : null : null,
      "payment_token": token ? token.id !== null && token.id !== undefined ? token.id : null : null

    }
      ;
    console.log("dddddd", data)
    /// post request
    fetch("https://api.cvvlogs.com/cv-tube/api.v.1/user/package_payment_confirmation.php", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "auth_id": `${localStorage.getItem("auth_id")}` },
      body: JSON.stringify({
        "pkg_id": props.id !== null ? props.id : null,
        "costumer_id": token ? token.card ? token.card.id !== null && token.card.id !== undefined ? token.card.id : null : null : null,
        "payment_token": token ? token.id !== null && token.id !== undefined ? token.id : null : null


      })
    }).then(res => {
      console.log("res aqib", res.json())

      alert("successfully buy....")
      window.location = "/dashboard"

    }).catch((error) => {
      console.log(error)

    })
    console.log(token);
  };

  const stripeKey = "pk_test_51Iw2FFKl1ZAnnMNkMEtJGcvYDf19HGfk5Jns9Akj5omsZb4xfxsPyOEs3AZBi1UHnmdoL9yP3gWBpr1c1gbFRq7h00LYMbXXN5";

  const totalAmount = props.amount * 100

  console.log(totalAmount)

  return (
    <StripeCheckout
      className="check"
      style={{ background: "orange !important" }}
      amount={`${totalAmount}`}
      description="Awesome Product"
      locale="auto"
      name="YourDomain.tld"
      stripeKey={stripeKey}
      token={onToken}
      zipCode
    />
  )

}

export default MStripe





// import React from "react"
// import StripeCheckout from "react-stripe-checkout"
// import { Elements ,Stripe} from "@stripe/react-stripe-js";
// import { loadStripe} from "@stripe/stripe-js";
// import "./App.css"


// import React from "react";
// import LinkedIn from "linkedin-login-for-react";
// import React, { Component } from "react";
// import getURL from "./getURL";
// import PropTypes from "prop-types";
// import React from "react";
// import Webcam2 from "./Components/WebCam/Webcam2";
// import Routing from "./Routing/Routing";
// import DisabledButton from "./Components/DisabledButton";
// import PersonalDetails from "./Pages/PersonalDetails/PersonalDetails";
// import KeySkills from "./Pages/KeySkills/KeySkills";
// import React, { useEffect } from "react"
// // import LinkedIn from "linkedin-login-for-react";
// // import styles from "./styles.css";

// const stripePromise = loadStripe("pk_test_51Iw2FFKl1ZAnnMNkMEtJGcvYDf19HGfk5Jns9Akj5omsZb4xfxsPyOEs3AZBi1UHnmdoL9yP3gWBpr1c1gbFRq7h00LYMbXXN5");
// const key=Stripe("pk_test_51Iw2FFKl1ZAnnMNkMEtJGcvYDf19HGfk5Jns9Akj5omsZb4xfxsPyOEs3AZBi1UHnmdoL9yP3gWBpr1c1gbFRq7h00LYMbXXN5")

// function MStripe() {
//     const onToken = (token) => {
//         fetch('/get-premium', {
//           method: 'POST',
//           body: JSON.stringify(token),
//         }).then(response => {
//             console.log("gggg",response.body)
//         //   response.json().then(data => {
//         //       console.log("gggg",data)
//         //     alert(`We are in business, ${data.email}`);
//         //   });
//         });
//       }

//   return (   
// <>
// {/* <Elements > */}
//      <StripeCheckout
//         className="check"
//         style={{background:"orange !important"}}
//         token={onToken}
//         stripeKey="pk_test_51Iw2FFKl1ZAnnMNkMEtJGcvYDf19HGfk5Jns9Akj5omsZb4xfxsPyOEs3AZBi1UHnmdoL9yP3gWBpr1c1gbFRq7h00LYMbXXN5"
//      /> 
//     {/* </Elements> */}
// </>






//   );
// }

// export default MStripe;



