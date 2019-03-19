import firebase from 'firebase'

const CONFIG = {
    apiKey: "AIzaSyBUcbikbJBaXObjSwAeDA8wzTmVbnVYL0U",
    authDomain: "proloc-4f2c4.firebaseapp.com",
    databaseURL: "https://proloc-4f2c4.firebaseio.com",
    projectId: "proloc-4f2c4",
    storageBucket: "proloc-4f2c4.appspot.com",
    messagingSenderId: "762805689400"
}

const fire = firebase.initializeApp (CONFIG)

export const logOut = () => {
  console.log ('chamou logout')
  fire.auth().signOut()
  .then((response) => { localStorage.removeItem('user') })
  .catch((error) => { console.log('error =>', error) })
}

export const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    console.log('user status changed')
    if (user) { localStorage.setItem('user', user.uid) } 
    else      { localStorage.removeItem('user') }
  })
} 

export const userIsOn = () => { 
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user)
      return(true)
    } else {
      console.log('no user')
      return(false)
    }
  });
}

export default fire
