


// paymentRequest.on('paymentmethod', async (ev) => {
//   // Confirm the PaymentIntent without handling potential next actions (yet).
//   const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
//     "sk_test_51Iw2FFKl1ZAnnMNkNxihLk9OPlV6BBX0F3bNFYj54aOo9IDQHu0PP7RB8hAxDcuC20T0BhuEzMjUKPaPFtK0xQ6800nNPeqAw4",
//     {payment_method: ev.paymentMethod.id},
//     {handleActions: false}
//   );

//   if (confirmError) {
//     // Report to the browser that the payment failed, prompting it to
//     // re-show the payment interface, or show an error message and close
//     // the payment interface.
//     ev.complete('fail');
//   } else {
//     // Report to the browser that the confirmation was successful, prompting
//     // it to close the browser payment method collection interface.
//     ev.complete('success');
//     // Check if the PaymentIntent requires any actions and if so let Stripe.js
//     // handle the flow. If using an API version older than "2019-02-11" instead
//     // instead check for: `paymentIntent.status === "requires_source_action"`.
//     if (paymentIntent.status === "requires_action") {
//       // Let Stripe.js handle the rest of the payment flow.
//       const {error} = await stripe.confirmCardPayment("sk_test_51Iw2FFKl1ZAnnMNkNxihLk9OPlV6BBX0F3bNFYj54aOo9IDQHu0PP7RB8hAxDcuC20T0BhuEzMjUKPaPFtK0xQ6800nNPeqAw4");
//       if (error) {
//         // The payment failed -- ask your customer for a new payment method.
//       } else {
//         // The payment has succeeded.
//       }
//     } else {
//       // The payment has succeeded.
//     }
//   }
// });

// Use a traditional checkout form.
//   return 'Insert your form or button component here.';
// }

// ------------------------------------------------------------------------

// import React from "react";
// import "./styles.css";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");

// const App = () => {
//   return (
//     <div className="App">
//       <div className="product">
//         <img
//           src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
//           alt="laptop"
//           style={{ width: "100%", height: "auto" }}
//         />
//         <div>
//           <Elements stripe={stripePromise}>
//             <CheckoutForm />
//           </Elements>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;








// import React from "react";
// import LinkedIn from "linkedin-login-for-react";
// import React, { Component } from "react";
// import getURL from "./getURL";
// import PropTypes from "prop-types";
// import React from "react";
import Webcam2 from "./Components/WebCam/Webcam2";
import Routing from "./Routing/Routing";
import DisabledButton from "./Components/DisabledButton";
import PersonalDetails from "./Pages/PersonalDetails/PersonalDetails";
import KeySkills from "./Pages/KeySkills/KeySkills";
// import CheckUpload from "./Components/CheckUpload";
import firebase from "./helpers/firebase"
import React, { useEffect } from "react"
import WebCam from "./Components/WebCam/WebCam";
import Zendesk from "react-zendesk";
// // import LinkedIn from "linkedin-login-for-react";
// // import styles from "./styles.css";


const setting = {
  color: {
    theme: "#8A2BE2",
    
  },
  launcher: {
    chatLabel: {
      "en-US": "Need Help"
    }
  },
  contactForm: {
    fields: [
      { id: "description", prefill: { "*": "My pre-filled description" } }
    ]
  }
};


function App() {
  useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      // console.log("token",data)
      localStorage.setItem("dToken1", data)
    }).catch(e => {
      console.log("errorrrr", e)
    })
  })
  return (
    <div>
      
    <Zendesk defer zendeskKey={'673870e5-9d61-4c2a-935c-a64ead66d356'} {...setting} onLoaded={() => console.log('is loaded')} />
      <Routing />
      
    </div>

  );
}

export default App;



{/* <Routing/> */ }
{/* <Dashboard/> */ }
{/* <KeySkills/> */ }
{/* <ProfessionalDetails/> */ }
{/* <Headlines/> */ }
{/* <QualifcicationDetails/> */ }
{/* <PersonalDetails/>  */ }
{/* <GetPremium/> */ }
{/* <JobAlert/> */ }
{/* <SearchJobs/> */ }
{/* <CompanyProfile/> */ }
{/* <JobsDetail/> */ }
{/* <UploadCv/> */ }
{/* <AppliedSuccess/> */ }
{/* <DashboardProfileCard/> */ }



// import styles from "./styles.css";

// class LoginWithLinkedin extends React.Component {
//   static propTypes = {};

//   /*
//     ** @code = authorization code from linkedin api
//     ** @redirectUri = redirect uri from linkedin api
//     ** @error = error message sign in failed
//     */
//   callbackLinkedIn = (error, code, redirectUri) => {
//     if (error) {
//       // signin failed
//     } else {
//       // Obtain authorization token from linkedin api
//       // see https://developer.linkedin.com/docs/oauth2 for more info

//       
//     }
//   };

//   render() {
//     return (
//       <LinkedIn
//         clientId="77ul9euvdop3a4"
//         callback={this.callbackLinkedIn}
//         // className={styles.linkedin}
//         scope={["r_liteprofile","r_emailaddress"]}
//         text="Login With LinkedIn"
//       />
//     );
//   }
// }

// export default LoginWithLinkedin;






// class LinkedIn extends Component {
//   componentDidMount() {
//     this.restart();
//   }

//   restart = () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const redirectUri = localStorage.linkedInReactRedirectUri;
//     const previousState = localStorage.linkedInReactState;

//     localStorage.linkedInReactState = "";
//     localStorage.linkedInReactRedirectUri = "";

//     const newState = urlParams.get("state");
//     const code = urlParams.get("code");
//     const error = urlParams.get("error");

//     let newURL = window.location.pathname;
//     urlParams.delete("state");
//     urlParams.delete("error");
//     urlParams.delete("error_description");
//     urlParams.delete("code");
//     if (urlParams.toString()) {
//       newURL = newURL + "?" + urlParams.toString();
//     }

//     window.history.replaceState(null, null, newURL);

//     if (error) {
//       this.props.callback(error, null, null);
//     } else if (redirectUri && code && previousState === newState) {
//       this.props.callback(null, code, redirectUri);
//     }
//   };

//   start = () => {
//     const { clientId, scope } = this.props;
//     const state = Math.random()
//       .toString(36)
//       .substring(7);
//     localStorage.linkedInReactState = state;
//     localStorage.linkedInReactRedirectUri = window.location.href;
//     window.location.href = getURL(clientId, state, scope); // build url out of clientid, scope and state
//   };

//   render() {
//     return (
//       <button className={this.props.className} onClick={this.start}>
//        Linked In Login
//       </button>
//     );
//   }
// }

// LinkedIn.propTypes = {
//   clientId: PropTypes.string,
//   callback: PropTypes.func.isRequired,
//   className: PropTypes.string,
//   // text: PropTypes.node,
//   scope: PropTypes.arrayOf(PropTypes.string)
// };

// export default LinkedIn;




























