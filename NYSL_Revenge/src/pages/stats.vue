<template>
  <f7-page class="greenish">
    <f7-navbar title="Stats" back-link="Back"></f7-navbar>
    <f7-block v-show="!currentUser" class="notLogged">
      <h2>Log in to see info and stats for each team here.</h2>
      <f7-button class="btn" fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
    </f7-block>
    <f7-block v-show="currentUser" class="inline">
      <div id="chart">
        <h1>Goals Made</h1>
        <apexchart type="donut" width="100%" :options="chartOptions" :series="goalpie"></apexchart>
      </div>
      <div id="chart">
        <h1>Yellow Cards</h1>
        <apexchart type="donut" width="100%" :options="chartOptions" :series="cardY"></apexchart>
      </div>
      <div id="chart">
        <h1>Red Cards</h1>
        <apexchart type="donut" width="100%" :options="chartOptions" :series="cardR"></apexchart>
        <p>*Teams without red cards are not visible in the chart</p>
      </div>
    </f7-block>
    <f7-block v-show="currentUser" class="inline">
      <f7-card class="card">
        <f7-card-header class="title">Forwards</f7-card-header>
        <f7-card-content :padding="false" class="bodycard">
          <f7-list medial-list>
            <f7-list-item title="Goals:">{{this.forwardGoals}}</f7-list-item>
            <f7-list-item title="Yellow Cards:">{{this.forwardYellows}}</f7-list-item>
            <f7-list-item title="Red Cards:">{{this.forwardReds}}</f7-list-item>
          </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <span>Average forwards per team:</span>
          <span>{{this.forwavg}}</span>
        </f7-card-footer>
      </f7-card>
      <f7-card class="card">
        <f7-card-header class="title">Midfielders</f7-card-header>
        <f7-card-content :padding="false" class="bodycard">
          <f7-list medial-list>
            <f7-list-item title="Goals:">{{this.midfieldGoals}}</f7-list-item>
            <f7-list-item title="Yellow Cards:">{{this.midfieldYellows}}</f7-list-item>
            <f7-list-item title="Red Cards:">{{this.midfieldReds}}</f7-list-item>
          </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <span>Average midfielders per team:</span>
          <span>{{this.midfavg}}</span>
        </f7-card-footer>
      </f7-card>
      <f7-card class="card">
        <f7-card-header class="title">Defenders</f7-card-header>
        <f7-card-content :padding="false" class="bodycard">
          <f7-list medial-list>
            <f7-list-item title="Goals:">{{this.defenderGoals}}</f7-list-item>
            <f7-list-item title="Yellow Cards:">{{this.defenderReds}}</f7-list-item>
            <f7-list-item title="Red Cards:">{{this.defenderYellows}}</f7-list-item>
          </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <span>Average defenders per team:</span>
          <span>{{this.defeavg}}</span>
        </f7-card-footer>
      </f7-card>
      <f7-card class="card">
        <f7-card-header class="title">Keepers</f7-card-header>
        <f7-card-content :padding="false" class="bodycard">
          <f7-list medial-list>
            <f7-list-item title="Goals:">{{this.keeperGoals}}</f7-list-item>
            <f7-list-item title="Yellow Cards:">{{this.keeperYellows}}</f7-list-item>
            <f7-list-item title="Red Cards:">{{this.keeperReds}}</f7-list-item>
          </f7-list>
        </f7-card-content>
        <f7-card-footer>
          <span>Average keepers per team:</span>
          <span>{{this.keepavg}}</span>
        </f7-card-footer>
      </f7-card>
    </f7-block>
  </f7-page>
</template>

<script>
import firebase from "firebase/app";
import ApexCharts from "apexcharts";
import VueApexCharts from "vue-apexcharts";
require("firebase/database");

export default {
  components: {
    apexchart: VueApexCharts //used for the donut charts
  },
  data() {
    return {
      currentUser: "",
      punten: [],
      goals: [],
      yellows: [],
      reds: [],
      goalpie: [],
      cardY: [],
      cardR: [],
      //chart modifications
      chartOptions: {
        plotOptions: {
          pie: {
            expandOnClick: true,
            donut: {
              labels: {
                show: true,
                name: { color: "rgb(0, 0, 0)" },
                total: {
                  show: true,
                  showAlways: false,
                  color: "rgb(0, 0, 0)"
                }
              }
            }
          }
        },
        colors: [
          "rgb(0, 0, 255)",
          "rgb(0, 255, 0)",
          "rgb(255, 255, 0)",
          "rgb(255, 0, 0)",
          "rgb(255, 172, 0)",
          "rgb(191, 0, 239)"
        ],
        tooltip: {
          enabled: false
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#FFF", "#8D8E8E", "#8D8E8E", "#FFF", "#FFF", "#FFF"]
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 0.5,
            opacity: 0.5
          }
        },
        legend: {
          show: true,
          position: "right",
          floating: false
        },
        labels: [
          "De Blauwen",
          "De Groenen",
          "De Gelen",
          "De Roden",
          "De Oranjes",
          "De Paarsen"
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                show: false
              }
            }
          }
        ]
      },
      //database values
      players: [],
      goals: "",
      points: "",
      yellows: "",
      reds: "",
      ties: "",
      winsT: "",
      keepers: [],
      keeperGoals: 0,
      keeperReds: 0,
      keeperYellows: 0,
      forwardGoals: 0,
      forwardReds: 0,
      forwardYellows: 0,
      midfieldGoals: 0,
      midfieldReds: 0,
      midfieldYellows: 0,
      defenderGoals: 0,
      defenderReds: 0,
      defenderYellows: 0,
      forwards: [],
      defenders: [],
      midfielders: []
    };
  },
  created() {
    firebase
      .database()
      .ref("/players")
      .once("value")
      .then(snapshot => {
        this.getuser;
        let blGoal = 0;
        let blYell = 0;
        let blRed = 0;
        let grGoal = 0;
        let grYell = 0;
        let grRed = 0;
        let yeGoal = 0;
        let yeYell = 0;
        let yeRed = 0;
        let rdGoal = 0;
        let rdYell = 0;
        let rdRed = 0;
        let orGoal = 0;
        let orYell = 0;
        let orRed = 0;
        let prGoal = 0;
        let prYell = 0;
        let prRed = 0;
        //getting the values for each player filtered by position
        snapshot.forEach(snapshot => {
          const player = snapshot.val();
          player.key = snapshot.key;
          if (player.position === "Keeper") {
            this.keepers.push(player);
            this.keeperGoals += player.goals;
            this.keeperReds += player.redC;
            this.keeperYellows += player.yellowC;
          }
          if (player.position === "Forward") {
            this.forwards.push(player);
            this.forwardGoals += player.goals;
            this.forwardReds += player.redC;
            this.forwardYellows += player.yellowC;
          }
          if (player.position === "Midfield") {
            this.midfielders.push(player);
            this.midfieldGoals += player.goals;
            this.midfieldReds += player.redC;
            this.midfieldYellows += player.yellowC;
          }
          if (player.position === "Defender") {
            this.defenders.push(player);
            this.defenderGoals += player.goals;
            this.defenderReds += player.redC;
            this.defenderYellows += player.yellowC;
          }
          //getting the total values for each team
          switch (player.team) {
            case "De Blauwen":
              blGoal += player.goals;
              blYell += player.yellowC;
              blRed += player.redC;
              break;
            case "De Groenen":
              grGoal += player.goals;
              grYell += player.yellowC;
              grRed += player.redC;
              break;
            case "De Gelen":
              yeGoal += player.goals;
              yeYell += player.yellowC;
              yeRed += player.redC;
              break;
            case "De Roden":
              rdGoal += player.goals;
              rdYell += player.yellowC;
              rdRed += player.redC;
              break;
            case "De Oranjes":
              orGoal += player.goals;
              orYell += player.yellowC;
              orRed += player.redC;
              break;
            case "De Paarsen":
              prGoal += player.goals;
              prYell += player.yellowC;
              prRed += player.redC;
              break;
          }
          this.players.push(player);
        });
        //pushing the stats into array to use in donuts
          this.goalpie.push(blGoal),
          this.goalpie.push(grGoal),
          this.goalpie.push(yeGoal),
          this.goalpie.push(rdGoal),
          this.goalpie.push(orGoal),
          this.goalpie.push(prGoal);

          this.cardY.push(blYell),
          this.cardY.push(grYell),
          this.cardY.push(yeYell),
          this.cardY.push(rdYell),
          this.cardY.push(orYell),
          this.cardY.push(prYell);

          this.cardR.push(blRed),
          this.cardR.push(grRed),
          this.cardR.push(yeRed),
          this.cardR.push(rdRed),
          this.cardR.push(orRed),
          this.cardR.push(prRed);
      });
  },
  computed: {
    keepavg() {
      return (this.keepers.length / 6).toFixed(2);
    },
    forwavg() {
      return (this.forwards.length / 6).toFixed(2);
    },
    midfavg() {
      return (this.midfielders.length / 6).toFixed(2);
    },
    defeavg() {
      return (this.defenders.length / 6).toFixed(2);
    },
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
#chart P{
  width: 300px;
    text-align: center;
}
h1{
  width: 300px;
    text-align: center;
}
#chart{  
    width: 400px;
}
.card{
  width: 285px;
  background-color: rgba(0, 209, 58, 0.1);
  border:2px solid rgb(0, 209, 58);
  box-shadow: 4px 8px rgba(0, 0, 0, 0.45);
  margin-bottom: 15px;
}
.inline{
    display: inline-flex;
    flex-wrap: wrap;
    margin-bottom: 0px;
    justify-content: center;
}
.title{
  font-weight: bold;
    justify-content: center;
}
.greenish{
  background-color: rgb(235, 253, 235);
}
</style>