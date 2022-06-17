import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDMo9vm0CP3qjbt0c8eGc_oV-vUPpT5Fks",
    authDomain: "fooddelivery-724af.firebaseapp.com",
    databaseURL: "https://fooddelivery-724af-default-rtdb.firebaseio.com",
    projectId: "fooddelivery-724af",
    storageBucket: "fooddelivery-724af.appspot.com",
    messagingSenderId: "743700748261",
    appId: "1:743700748261:web:43cc9859fbd8bb1948810c"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};