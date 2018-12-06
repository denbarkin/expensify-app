import * as firebase from 'firebase'; 
// import all named exports as firebase object. 
//Very usefull try it actions for example, get all named exports as one object.

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

let db = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, db as default};

//child_removed Event
// db.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

//child_changed Event Subscription:
// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed Event:', snapshot.key, snapshot.val());
// })

// Howto Convert the array :
// db.ref('expenses').once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach( (childSnapshot) => {
//         expenses.push({
//             id : childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
    
// }).catch((e) => {
//     console.log('Error : ', e.message);
// })


// Setting to null same with delete all
// db.ref().set(null);
// db.ref('expenses').push({
//     description: 'Water Bill',
//     note : 'January Water Bill',
//     amount : 120000,
//     createdAt : 1209947858
// })

// db.ref('expenses').push({
//     description: 'Wall-Mart Bill',
//     note : 'January Wall Mart Bill',
//     amount : 450000,
//     createdAt : 1849947858
// })

// db.ref('expenses').push({
//     description: 'Caffe Shop',
//     note : 'Latte Bill',
//     amount : 56740,
//     createdAt : 4849947858
// })

// firebase.database().ref().set({
//     name : 'Barkin Takmaz',
//     age : 39,
//     skills : {
//         java : 'none',
//         swift : 'Good',
//     },
//     location : {
//         city : 'Istanbul',
//         country : 'Turkey'
//     }
// })

// Listens Data Change Events like subscribed to changes.
// db.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// db.ref('isSingle').set(true);

// db.ref('isSingle').remove().then(() => {
//     console.log('removed from the db');
// }).catch((e) => {
//     console.log('Error : ', e.message);    
// })