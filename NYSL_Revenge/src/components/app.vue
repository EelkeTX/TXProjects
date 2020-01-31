<template>
  <f7-app :params="f7params">
    <!-- Left panel with cover effect-->
    <f7-panel left cover>
      <f7-view>
        <f7-page class="greenish">
          <f7-navbar title="Navigation"></f7-navbar>
          <f7-list>
            <f7-list-item
              link="/teams/"
              title="Teams"
              view="#main"
              panel-close="left"
              class="greenish"
            ></f7-list-item>
            <f7-list-item
              link="/results/"
              title="Results"
              view="#main"
              panel-close="left"
              class="greenish"
            ></f7-list-item>
            <f7-list-item
              link="/locations/"
              title="Locations"
              view="#main"
              panel-close="left"
              class="greenish"
            ></f7-list-item>
            <f7-list-item
              link="/chat/"
              title="Chat"
              view="#main"
              panel-close="left"
              class="greenish"
            ></f7-list-item>
            <f7-list-item
              link="/stats/"
              title="Stats"
              view="#main"
              panel-close="left"
              class="greenish"
            ></f7-list-item>
            <f7-list-item
              link="/players/"
              title="Players"
              view="#main"
              panel-close="left"
              class="greenish"
            ></f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right cover>
      <f7-view>
        <f7-page class="greenish">
          <f7-navbar title="Upcoming Matches:"></f7-navbar>
          <f7-block>
            <div class="card card-outline">
              <div class="card-header">De Blauwen - De Groenen</div>
              <div class="card-content card-content-padding">02-02-2020 at 12:00</div>
              <div class="card-content card-content-padding">Location: De Smurfdome</div>
              <div class="card-footer center">Round 3</div>
            </div>
            <div class="card card-outline">
              <div class="card-header">De Gelen - De Oranjes</div>
              <div class="card-content card-content-padding">02-02-2020 at 12:00</div>
              <div class="card-content card-content-padding">Location: Een Bak Vla</div>
              <div class="card-footer center">Round 3</div>
            </div>
            <div class="card card-outline">
              <div class="card-header">De Roden - De Paarsen</div>
              <div class="card-content card-content-padding">02-02-2020 at 12:00</div>
              <div class="card-content card-content-padding">Location: De Stierenkooi</div>
              <div class="card-footer center">Round 3</div>
            </div>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>

    <!-- Popup -->
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Logout">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <H2 class="centered">Are you sure? Press the button below.</H2>
          <f7-list class="center">
            <f7-list-button title="Sign out" @click="logout"></f7-list-button>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="email"
              placeholder="Your email"
              :value="email"
              @input="email = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              :value="password"
              @input="password = $event.target.value"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>
            <f7-block-footer>
              <br />Click "Sign In" to close Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import routes from "../js/routes.js";
import teams from "../pages/teams.vue";

import firebase from "firebase/app";

require("firebase/database");
const firebaseConfig = {
  apiKey: "AIzaSyCF5tTh136RnoEhptk1nVr3F0s0W_kXoYU",
  authDomain: "nysl-revenge.firebaseapp.com",
  databaseURL: "https://nysl-revenge.firebaseio.com",
  projectId: "nysl-revenge",
  storageBucket: "nysl-revenge.appspot.com",
  messagingSenderId: "403650577525",
  appId: "1:403650577525:web:833413c5f81eeaebb9243c"
};

firebase.initializeApp(firebaseConfig);

var firebaseui = require("firebaseui");

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("loader").style.display = "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
var user = firebase.auth().currentUser;
if (!user) {
  //   // The start method will wait until the DOM is loaded.
}

export default {
  components: { teams },
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: "NYSL Revenge", // App name
        theme: "auto", // Automatic theme detection

        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: "/service-worker.js"
        }
      },
      // Login screen data
      email: "",
      password: "",
      currentUser: ""
    };
  },

  computed: {
    getuser() {
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {
    alertLoginData() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      this.getuser;
      this.$f7.dialog.alert(
        "email: " + this.email + "<br>Password: " + this.password
      );
      window.location = "index.html";
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            // Sign-out successful.
            console.log("You left our awesome app.");
            window.location = "index.html";
          },
          function(error) {
            // An error happened.
          }
        );
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
  }
};
</script>
<style lang="sass" scoped>
.center {
  justify-content: center;
}
.centered{
  padding: 30px;
  text-align: center;
}
.greenish{
  background-color: rgb(235, 253, 235);
}
</style>