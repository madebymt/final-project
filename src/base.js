import Rebase from 're-base'
import * as firebase from 'firebase';

const base = ({
    apiKey: "AIzaSyD2PtIVlCYt1T2Aq2KfXQLxJy7XZuRXzJ4",
    authDomain: "final-11ff5.firebaseapp.com",
    databaseURL: "https://final-11ff5.firebaseio.com",
    projectId: "final-11ff5",
    storageBucket: "final-11ff5.appspot.com",
    messagingSenderId: "98923867424"
})

firebase.initializeApp(base)

export default base
