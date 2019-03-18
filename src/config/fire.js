import firebase  from 'firebase'

const CONFIG = {
    apiKey: "AIzaSyBUcbikbJBaXObjSwAeDA8wzTmVbnVYL0U",
    authDomain: "proloc-4f2c4.firebaseapp.com",
    databaseURL: "https://proloc-4f2c4.firebaseio.com",
    projectId: "proloc-4f2c4",
    storageBucket: "proloc-4f2c4.appspot.com",
    messagingSenderId: "762805689400"
  }

  export const logOut = () => {
    fire.auth().signOut()
    .then((response) => {
        localStorage.removeItem('user')
        this.setState( { user: '' } )
    })
    .catch((error) => {
        console.log('error =>', error)
    })
}

export const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      localStorage.setItem('user', user.uid)
      this.setState( { user: user.uid } )
    } else {
      localStorage.removeItem('user')
      this.setState( { user: '' } )
    }
  })
} 

const fire = firebase.initializeApp (CONFIG)

export default fire
