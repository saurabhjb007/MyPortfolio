import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJZih5KnjZ5Vr0rQUo1Ze2nee0ZzNCChA",
  authDomain: "myportfolio-6c041.firebaseapp.com",
  projectId: "myportfolio-6c041",
  storageBucket: "myportfolio-6c041.appspot.com",
  messagingSenderId: "91304498276",
  appId: "1:91304498276:web:794bba41704a7cc686bb71",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
