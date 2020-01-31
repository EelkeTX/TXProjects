<template>
  <f7-page class="green">
    <f7-navbar title="Results" back-link="Back"></f7-navbar>
    <f7-block v-show="!currentUser" class="notLogged">
      <h1>Log in to see the match results here.</h1>
      <f7-button class="btn" fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>
    <f7-block class="inline">
      <f7-block v-for="game in games" v-bind:key="game.key">
        <f7-card class="card">
          <f7-card-content :padding="false" class="greenish">
            <f7-list medial-list>
              <f7-list-item title class="bold">
                <span>{{game.home}}</span> -
                <span>{{game.away}}</span>
              </f7-list-item>
              <f7-list-item title="Score:">{{game.scoreT1}} - {{game.scoreT2}}</f7-list-item>
              <f7-list-item
                title="Yellow Cards:"
              >{{game.yellowT1}} &nbsp; - &nbsp; {{game.yellowT2}}</f7-list-item>
              <f7-list-item title="Red Cards:">{{game.redT1}} &nbsp; - &nbsp; {{game.redT2}}</f7-list-item>
              <f7-list-item title="Played on:">{{game.played}}</f7-list-item>
              <f7-list-item title="Location:">{{game.location}}</f7-list-item>
            </f7-list>
          </f7-card-content>
          <f7-card-footer class="greenish foot">
            <span>
              <i>This was a Round {{game.round}} game.</i>
            </span>
          </f7-card-footer>
        </f7-card>
      </f7-block>
    </f7-block>
  </f7-page>
</template>

<script>
import firebase from "firebase/app";

require("firebase/database");

export default {
  data() {
    return {
      games: [],
      currentUser: ""
    };
  },
  created() {
    firebase
      .database()
      .ref("/games")
      .once("value")
      .then(snapshot => {
        this.getuser;
        snapshot.forEach(snapshot => {
          const game = snapshot.val();
          game.key = snapshot.key;
          this.games.push(game);
        });
      });
  },
  computed: {
    getuser() {
      this.currentUser = firebase.auth().currentUser.email;
    }
  }
};
</script>

<style lang="sass" scoped>
.notLogged{
  background-color: rgb(0, 209, 58);
  color: rgb(255, 255, 255);
  text-align: center;
  padding-bottom: 30px ;
  padding-top: 15px ;
  margin-top: 50px;
}
.btn{
  border:1px solid rgb(0, 0, 0);
  box-shadow: 4px 8px rgba(0, 0, 0, 0.45);
}
th {
  width: 8%
}
.card{
  width: 300px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  box-shadow: 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 0px;
  margin-top: 0px;
}
.inline{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
}
.bold{
  font-weight: bold;
}
.foot{
  justify-content: center;
  }
.green{
  background: url("../images/gras.jpg");
  background-blend-mode: overlay;
  background-color: rgba(0, 209, 58, 0.7);
}
.greenish{
  background-color: rgba(0, 209, 58, 0.1);
  background-blend-mode: overlay;
}
</style>