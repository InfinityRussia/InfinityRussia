import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "infinity-russia-2026.firebaseapp.com",
  projectId: "infinity-russia-2026",
  storageBucket: "infinity-russia-2026.firebasestorage.app",
  messagingSenderId: "340429670233",
  appId: "1:340429670233:web:a79c3b36e10783bc08ae48"
};

const app = initializeApp(firebaseConfig);

console.log("Infinity Russia Firebase подключён!");