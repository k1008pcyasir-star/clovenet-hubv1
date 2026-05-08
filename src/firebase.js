import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVrkT-PFFvnFdzQ9cBcQjwud-wk8lDEnw",
  authDomain: "clovenet-hub.firebaseapp.com",
  projectId: "clovenet-hub",
  storageBucket: "clovenet-hub.firebasestorage.app",
  messagingSenderId: "352570666520",
  appId: "1:352570666520:web:c14c032c12d2b172839d6d",
  measurementId: "G-EMHFB3SM6S"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);