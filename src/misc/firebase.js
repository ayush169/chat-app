import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyA8CixEalg4ZgLRQK9QAA92e1n8shlHNfc",
  authDomain: "chat-web-app-768fb.firebaseapp.com",
  databaseURL: "https://chat-web-app-768fb-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-768fb",
  storageBucket: "chat-web-app-768fb.appspot.com",
  messagingSenderId: "122227243529",
  appId: "1:122227243529:web:fdc68e5aca68fcfea3d6d8",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
