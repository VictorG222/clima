// Import the functions you need from the SDKs you need
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js", "https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwVgbamkWxeNZxoiO4mpzpmn6fq96P8E",
  authDomain: "notificacionesvg-d4af4.firebaseapp.com",
  projectId: "notificacionesvg-d4af4",
  storageBucket: "notificacionesvg-d4af4.appspot.com",
  messagingSenderId: "141433420708",
  appId: "1:141433420708:web:ea236c5ac00454c6611f31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log("Recibiste un mensaje mientras estabas ausente");
  console.log(payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo192.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
