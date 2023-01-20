import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBhDCG2-BIQ6rik4CeBzurco-VmPgn9Ibo",
    authDomain: "webnoti-852f9.firebaseapp.com",
    projectId: "webnoti-852f9",
    storageBucket: "webnoti-852f9.appspot.com",
    messagingSenderId: "475495985303",
    appId: "1:475495985303:web:418f4063f22d4c4f1f39d2",
    measurementId: "G-MKVJCTJGRV"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BNrlkjkGbn6PJfuVRNLUgROG0NQmx6r2EZXhvqLo4u77NBYq_OSxEHslIJ5h2Rco_zR21UKFs878utDxBlXGVXM",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission()  