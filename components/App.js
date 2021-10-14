var contactApp = angular.module("contactApp", []);
const firebaseConfig = {
    apiKey: "AIzaSyAnZdEkERgWuxjEeVFhnxeBTEjMZSqC5Jg",
    authDomain: "backend-01-57c0f.firebaseapp.com",
    projectId: "backend-01-57c0f",
    storageBucket: "backend-01-57c0f.appspot.com",
    messagingSenderId: "572920104262",
    appId: "1:572920104262:web:497a7f6e2cf5cfc09d9147"
  };
  //inicializa la base de datos firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();