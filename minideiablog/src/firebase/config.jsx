import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyART5tAg-KG9zrKP_a2wTMuuacQ5Lt3Axg",
  authDomain: "miniblog-victor-nicolau.firebaseapp.com",
  projectId: "miniblog-victor-nicolau",
  storageBucket: "miniblog-victor-nicolau.appspot.com",
  messagingSenderId: "745048863188",
  appId: "1:745048863188:web:aa65c55a9e7d720a25a641",
  measurementId: "G-52B1Y2CVD6"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);