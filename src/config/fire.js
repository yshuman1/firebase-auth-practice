import * as firebase from "firebase";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJ_ID,
  storageBucket: process.env.STOR_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID
};

const fire = firebase.initializeApp(config);
export default fire;