

//   import React, { useState, useEffect, useRef } from 'react';

// const SquarePaymentForm = ({ appId, locationId, accessToken }) => {
//   const [loading, setLoading] = useState(true);
//   const card = useRef(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = "https://web.squarecdn.com/v1/square.js";
//     script.async = true;
//     script.onload = () => {
//       setLoading(false);
//       initializeCard();
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [appId, locationId, accessToken]);

//   const initializeCard = async () => {
//     if (!window.Square) {
//       console.error('Square SDK not loaded correctly!');
//       return;
//     }
//     try {
//       const payments = window.Square.payments(appId, locationId);
//       card.current = await payments.card();
//       await card.current.attach('#card-container');
//     } catch (error) {
//       console.error('Initializing Square card failed:', error);
//     }
//   };

//   const handlePaymentSubmit = async (event) => {
//     event.preventDefault();
//     if (!card.current) {
//       console.log('Card component not ready');
//       return;
//     }
//     try {
//       const result = await card.current.tokenize();
//       if (result.status === 'OK') {
//         console.log('Token:', result.token);
//         // Handle the token here, e.g., send it to your server to process the payment
//         alert('Payment successful!');
//       } else {
//         console.error('Error tokenizing card:', result.errors);
//         alert('Payment failed!');
//       }
//     } catch (error) {
//       console.error('Failed to tokenize card:', error);
//       alert('Payment failed!');
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <form onSubmit={handlePaymentSubmit}>
//       <div id="card-container" style={{ minHeight: '50px' }}></div>
//       <button type="submit" disabled={loading}>Pay</button>
//     </form>
//   );
// };

// export default SquarePaymentForm;