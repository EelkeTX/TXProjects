<template>
  <f7-page class="green">
    <f7-navbar title="Teams" back-link="Back"></f7-navbar>
    <f7-block v-show="!currentUser" class="notLogged">
      <h1>Log in to see info and stats for each team here.</h1>
      <f7-button class="btn" fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>
    <f7-block class="inline">
      <f7-block v-for="team in teams" v-bind:key="team.key">
        <f7-card class="card">
          <f7-card-header
            class="bold"
            :class="{'blauwen':(team.teamName === 'De Blauwen'), 
                    'groenen':(team.teamName === 'De Groenen'), 
                    'gelen':(team.teamName === 'De Gelen'), 
                    'roden':(team.teamName === 'De Roden'), 
                    'oranjes':(team.teamName === 'De Oranjes'), 
                    'paarsen':(team.teamName === 'De Paarsen')}"
          >{{team.teamName}}</f7-card-header>
          <f7-card-content
            :padding="false"
            :class="{'blauwenB':(team.teamName === 'De Blauwen'), 
                      'groenenB':(team.teamName === 'De Groenen'), 
                      'gelenB':(team.teamName === 'De Gelen'), 
                      'rodenB':(team.teamName === 'De Roden'), 
                      'oranjesB':(team.teamName === 'De Oranjes'), 
                      'paarsenB':(team.teamName === 'De Paarsen')}"
          >
            <f7-list medial-list>
              <f7-list-item title="Goals">{{team.goals_made}}</f7-list-item>
              <f7-list-item title="Wins:">{{team.wins}}</f7-list-item>
              <f7-list-item title="Losses">{{team.losses}}</f7-list-item>
              <f7-list-item title="Ties">{{team.ties}}</f7-list-item>
              <f7-list-item title="Yellow Cards" class="yellow">{{team.yellowCs}}</f7-list-item>
              <f7-list-item title="Red Cards">{{team.redCs}}</f7-list-item>
            </f7-list>
          </f7-card-content>
          <f7-card-footer
            :class="{'blauwen':(team.teamName === 'De Blauwen'), 
                      'groenen':(team.teamName === 'De Groenen'), 
                      'gelen':(team.teamName === 'De Gelen'), 
                      'roden':(team.teamName === 'De Roden'), 
                      'oranjes':(team.teamName === 'De Oranjes'), 
                      'paarsen':(team.teamName === 'De Paarsen')}"
          >
            <span>{{team.games_played}} games played</span>
            <span>{{team.points}} Points this season</span>
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
      teams: [],
      currentUser: ""
    };
  },
  created() {
    firebase
      .database()
      .ref("/teams")
      .once("value")
      .then(snapshot => {
        this.getuser;
        snapshot.forEach(snapshot => {
          const team = snapshot.val();
          team.key = snapshot.key;
          this.teams.push(team);
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
  border: 1px solid black;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.5);
}
.inline{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
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
.blauwen{
  background-color: rgb(0, 128, 255);
  color: rgb(255, 255, 255)
}
.blauwenB{
  background-color: rgba(0, 128, 255, 0.3);
  color: rgb(0, 0, 0)
}
.groenen{
  background-color: rgb(0, 180, 58);
  color: rgb(255, 255, 255);
}
.groenenB{
  background-color: rgba(0, 180, 58, 0.3);
  color: rgb(0, 0, 0)
}
.gelen{
  background-color: rgb(242, 242, 0);
}
.gelenB{
  background-color: rgba(242, 242, 0, 0.3);
  color: rgb(0, 0, 0);
}
.roden{
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255)
}
.rodenB{
  background-color: rgba(255, 0, 0, 0.3);
  color: rgb(0, 0, 0)
}
.oranjes{
  background-color: rgb(255, 172, 0);
  color: rgb(255, 255, 255)
}
.oranjesB{
  background-color: rgba(255, 172, 0, 0.3);
  color: rgb(0, 0, 0)
}
.paarsen{
  background-color: rgb(191, 0, 239);
  color: rgb(255, 255, 255)
}
.paarsenB{
  background-color: rgba(191, 0, 239, 0.3);
  color: rgb(0, 0, 0)
}
</style>