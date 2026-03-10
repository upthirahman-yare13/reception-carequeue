// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB5LuhewiHycIpkMWq-3HUW8yRlsSy4fLA",
    authDomain: "carequeue-manager.firebaseapp.com",
    databaseURL: "https://carequeue-manager-default-rtdb.firebaseio.com",
    projectId: "carequeue-manager",
    storageBucket: "carequeue-manager.appspot.com",
    messagingSenderId: "328741466836",
    appId: "1:328741466836:web:d073eb2a501944e6fa8141"
};

// Hubi in la bilaabo app-ka hal mar oo keliya
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
