import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKTcz3294mPERGf__6E_VsU7Dtay4qFCw",
  authDomain: "hawk-protein.firebaseapp.com",
  projectId: "hawk-protein",
  storageBucket: "hawk-protein.appspot.com",
  messagingSenderId: "537277523374",
  appId: "1:537277523374:web:f967ee1d6c93199ade943f"
};

//INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

export const firebaseConnections= () => app