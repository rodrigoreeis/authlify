import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCF0iQKPCAHXIs3atyhO9PDsQCGfZEi9uE',
  authDomain: 'react-events-8f0aa.firebaseapp.com',
  databaseURL: 'https://react-events-8f0aa.firebaseio.com',
  projectId: 'react-events-8f0aa',
  storageBucket: 'react-events-8f0aa.appspot.com',
  messagingSenderId: '214184060703',
  appId: '1:214184060703:web:3b40ff44a1c09d1ee6722a',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
