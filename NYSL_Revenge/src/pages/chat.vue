<template>
  <f7-page class="greenish">
    <f7-navbar title="Contacts" back-link="Back"></f7-navbar>
    <f7-block>
      <h1>Welcome to the NYSL chatpage</h1>
      <div id="firechat-wrapper" class="test">
        <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
      </div>
    </f7-block>
  </f7-page>
</template>

<!--<script>
// import firechat from 'firechat';
// import firebase from "firebase/app";
// // const firebase = require('firebase/app')
// require("firebase/database");
// require('firebase/auth')
// const firebaseConfig = {
//   apiKey: "AIzaSyCF5tTh136RnoEhptk1nVr3F0s0W_kXoYU",
//   authDomain: "nysl-revenge.firebaseapp.com",
//   databaseURL: "https://nysl-revenge.firebaseio.com",
//   projectId: "nysl-revenge",
//   storageBucket: "nysl-revenge.appspot.com",
//   messagingSenderId: "403650577525",
//   appId: "1:403650577525:web:833413c5f81eeaebb9243c"
// };

// firebase.initializeApp(firebaseConfig);

// var user = firebase.auth().currentUser;
//   // function login() {
//   //       // Log the user in via Twitter
//   //       var provider = new firebase.auth.EmailAuthProvider();
//   //       firebase.auth().signInWithPopup(provider).catch(function(error) {
//   //         console.log("Error authenticating user:", error);
//   //       });
//   //     }
//         function login() {
//         // Log the user in via Twitter
//         var provider = new firebase.auth.TwitterAuthProvider();
//         firebase.auth().signInWithPopup(provider).catch(function(error) {
//           console.log("Error authenticating user:", error);
//         });
//       }

//  firebase.auth().onAuthStateChanged(function(user) {
//         // Once authenticated, instantiate Firechat with the logged in user
//         if (user) {
//           initChat(user);
//         }
//       });

//       function initChat(user) {
//         // Get a Firebase Database ref
//         var chatRef = firebase.database().ref("chat");

//         // Create a Firechat instance
//         var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));

//         // Set the Firechat user
//         chat.setUser(user.uid, user.displayName);
//       }
// export default {};
// </script>-->

<script>
import firebase from "firebase/app";

require("firebase/database");

export default {
  data() {
    return {
      user: "hoi",
      email: "",
      password: "",
      displayName: ""
    };
  },
  created() {
    //LOGIN
    firebase.auth().onAuthStateChanged(function(user) {
      // Once authenticated, instantiate Firechat with the logged in user
      if (user) {
        initChat(user);
        // //userupdate was needed to set the firebase displayname
        //   user.updateProfile({
        //     displayName: "Mr Tester"
        //   })
        //   .then(
        //     function() {
        //       // Profile updated successfully!
        //       // "Jane Q. User"
        //       var displayName = user.displayName;
        //       console.log(user.displayName)
        //     },
        //     function(error) {
        //       // An error happened.
        //     }
        //   );
      }
    });

    //CHAT
    function initChat(user) {
      // Get a Firebase Database ref
      var chatRef = firebase.database().ref("chat");

      // Create a Firechat instance

      var chatUI = new FirechatUI(
        chatRef,
        document.getElementById("firechat-wrapper")
      );
      let chat = chatUI._chat;
      // Set the Firechat user
      chatUI.setUser(user.uid, user.displayName);
    }
  }
};
</script>

<style lang="sass" scoped>
.card{
  width: 300px;
}
.inline{
    display: inline-flex;
    flex-wrap: wrap;
}
h1{
  text-align: center;
}
.greenish{
  background-color: rgb(235, 253, 235);
}
.test{
  background-color: rgba(0, 209, 58, 0.1);
  border:2px solid rgb(0, 209, 58);
  box-shadow: 4px 8px rgba(0, 0, 0, 0.45);
}
</style>