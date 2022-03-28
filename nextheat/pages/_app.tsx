import "../styles/globals.css";

import { GetServerSideProps } from "next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAuoEFWeC5upecgQVeXJd6uwR0T5y9EAfc",
//   authDomain: "firebasing-6e13a.firebaseapp.com",
//   projectId: "firebasing-6e13a",
//   storageBucket: "firebasing-6e13a.appspot.com",
//   messagingSenderId: "387632429691",
//   appId: "1:387632429691:web:04028316506b6043f580de"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
