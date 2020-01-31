<template>
  <f7-page class="greenish">
    <f7-navbar title="Players" back-link="Back"></f7-navbar>
    <f7-block v-show="!currentUser" class="notLogged">
      <h1>Log in to see info about all the players here.</h1>
      <f7-button class="btn" fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>
    <f7-block v-show="currentUser">
      <h2>Players of the NYSL League</h2>
      <p>You can search for a player by name, position or team.</p>
      <div class="searchbar">
        <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
      </div>
      <f7-block class="inline" v-for="player in resultQuery" v-bind:key="player.id">
        <f7-card class="card">
          <f7-card-header
            class="bold"
            :class="{'blauwen':(player.team === 'De Blauwen'), 
                    'groenen':(player.team === 'De Groenen'), 
                    'gelen':(player.team === 'De Gelen'), 
                    'roden':(player.team === 'De Roden'), 
                    'oranjes':(player.team === 'De Oranjes'), 
                    'paarsen':(player.team === 'De Paarsen')}"
          >{{player.name}}</f7-card-header>
          <f7-card-content
            :padding="false"
            :class="{'blauwenB':(player.team === 'De Blauwen'), 
                    'groenenB':(player.team === 'De Groenen'), 
                    'gelenB':(player.team === 'De Gelen'), 
                    'rodenB':(player.team === 'De Roden'), 
                    'oranjesB':(player.team === 'De Oranjes'), 
                    'paarsenB':(player.team === 'De Paarsen')}"
          >
            <f7-list medial-list>
              <f7-list-item title="Team:">{{player.team}}</f7-list-item>
              <f7-list-item title="Position">{{player.position}}</f7-list-item>
              <f7-list-item title="Goals">{{player.goals}}</f7-list-item>
              <f7-list-item title="Yellow Cards">{{player.yellowC}}</f7-list-item>
              <f7-list-item title="Red Cards">{{player.redC}}</f7-list-item>
              <f7-list-item title="Gender">{{player.gender}}</f7-list-item>
            </f7-list>
          </f7-card-content>
          <f7-card-footer
            :class="{'blauwenB':(player.team === 'De Blauwen'), 
                    'groenenB':(player.team === 'De Groenen'), 
                    'gelenB':(player.team === 'De Gelen'), 
                    'rodenB':(player.team === 'De Roden'), 
                    'oranjesB':(player.team === 'De Oranjes'), 
                    'paarsenB':(player.team === 'De Paarsen')}"
          >
            <span>{{player.birthday}}</span>
            <span>{{player.email}}</span>
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
      players: [],
      searchQuery: "",
      team: "",
      currentUser: ""
    };
  },
  created() {
    firebase
      .database()
      .ref("/players")
      .once("value")
      .then(snapshot => {
        this.getuser;
        snapshot.forEach(snapshot => {
          const player = snapshot.val();
          player.key = snapshot.key;
          this.players.push(player);
        });
      });
  },
  computed: {
    resultQuery() {
      //live search results
      if (this.searchQuery) {
        return this.players.filter(player => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              v =>
                player.name.toLowerCase().includes(v) ||
                player.team.toLowerCase().includes(v) ||
                player.position.toLowerCase().includes(v)
            );
        });
      } else return this.players;
    },
    //to make the page only visible when logged in.
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
.card{
  width: 300px;
  border: 1px solid black;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.45);
}
.inline{
    display: inline-block;
}
.bold{
  font-weight: bold;
  justify-content: center;
}
.green{
  background: url("../images/gras.jpg");
  background-blend-mode: overlay;
  background-color: rgba(0, 209, 58, 0.7);
}
.greenish{
  background-color: rgb(235, 253, 235);
}
.blauwen{
  background-color: rgb(0, 128, 255);
  color: rgb(255, 255, 255)
}
.blauwenB{
  background-color: rgba(0, 128, 255, 0.1);
  color: rgb(0, 0, 0)
}
.groenen{
  background-color: rgb(0, 180, 58);
  color: rgb(255, 255, 255);
}
.groenenB{
  background-color: rgba(0, 180, 58, 0.1);
  color: rgb(0, 0, 0)
}
.gelen{
  background-color: rgb(242, 242, 0);
}
.gelenB{
  background-color: rgba(242, 242, 0, 0.1);
  color: rgb(0, 0, 0);
}
.roden{
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255)
}
.rodenB{
  background-color: rgba(255, 0, 0, 0.1);
  color: rgb(0, 0, 0)
}
.oranjes{
  background-color: rgb(255, 172, 0);
  color: rgb(255, 255, 255)
}
.oranjesB{
  background-color: rgba(255, 172, 0, 0.1);
  color: rgb(0, 0, 0)
}
.paarsen{
  background-color: rgb(191, 0, 239);
  color: rgb(255, 255, 255)
}
.paarsenB{
  background-color: rgba(191, 0, 239, 0.1);
  color: rgb(0, 0, 0)
}
</style>