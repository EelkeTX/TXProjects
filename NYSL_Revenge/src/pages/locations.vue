<template>
  <f7-page class="green">
    <f7-navbar title="Locations" back-link="Back"></f7-navbar>
    <f7-block class="inline">
      <div class="card">
        <div class="card-header align-items-flex-end team1">De Smurfdome</div>
        <div class="card-content card-content-padding card-description">
          <p class="subtitle">Home of De Blauwen</p>
          <p>Diep in het bos van Swifterbant naast de Albert Heijn</p>
        </div>
        <div class="card-footer">
          <a
            href="https://www.google.nl/maps/place/Het+Smurfendorp/@52.5713321,5.6175816,12.85z/data=!4m8!1m2!2m1!1sHet+Smurfendorp!3m4!1s0x47c8839782b72611:0x782ecacebfd9c771!8m2!3d52.5700298!4d5.6444484"
            class="external link"
            target="_blank"
          >Find on Map</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header align-items-flex-end team2">Het Grasveld</div>
        <div class="card-content card-content-padding card-description">
          <p class="subtitle">Home of De Groenen</p>
          <p>Part-time voetbalveld, part-time hondenuitlaatveld.</p>
        </div>
        <div class="card-footer">
          <a
            href="https://www.google.nl/maps/place/Grasveld+Design/@51.8487775,5.8683235,16.27z/data=!4m8!1m2!2m1!1sgrasveld!3m4!1s0x47c709796dc78bbd:0xd7d76644ec037cc4!8m2!3d51.8470168!4d5.8681048"
            class="external link"
            target="_blank"
          >Find on Map</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header align-items-flex-end team3">Een Bak Vla</div>
        <div class="card-content card-content-padding card-description">
          <p class="subtitle">Home of De Gelen</p>
          <p>Naast de snelweg, op de keukentafel, pas op de uiterste datum.</p>
        </div>
        <div class="card-footer">
          <a
            href="https://www.google.nl/maps/place/Voetbalveld+OPZ/@51.1559309,4.9804022,16.92z/data=!4m13!1m7!3m6!1s0x47c14be5c4257adf:0x40099ab2f4d5110!2s2440+Geel,+Belgium!3b1!8m2!3d51.16257!4d4.99084!3m4!1s0x47c149588b419e05:0x8d166609dc3a3618!8m2!3d51.1560189!4d4.982615"
            class="external link"
            target="_blank"
          >Find on Map</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header align-items-flex-end team4">De Stierenkooi</div>
        <div class="card-content card-content-padding card-description">
          <p class="subtitle">Home of De Roden</p>
          <p>Part-time voetbalveld, part-time stierenweide, let goed op de dag van de week.</p>
        </div>
        <div class="card-footer">
          <a
            href="https://www.google.nl/maps/place/Poldervlees.nl/@52.5852621,4.8402036,15.64z/data=!4m8!1m2!2m1!1svleesboerderij!3m4!1s0x0:0x63893c77b423d51c!8m2!3d52.5851119!4d4.8353577"
            class="external link"
            target="_blank"
          >Find on Map</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header align-items-flex-end team5">Het Paleis</div>
        <div class="card-content card-content-padding card-description">
          <p class="subtitle">Home of De Oranjes</p>
          <p>Vind de lakei bij de poort, vraag naar Willempie.</p>
        </div>
        <div class="card-footer">
          <a
            href="https://www.google.com/maps/place/Huis+Ten+Bosch/@52.0931135,4.3442271,18z/data=!4m5!3m4!1s0x0:0xee880ec498fd972e!8m2!3d52.0930492!4d4.3438167"
            class="external link"
            target="_blank"
          >Find on Map</a>
        </div>
      </div>
      <div class="card">
        <div class="card-header align-items-flex-end team6">Het Lavendelveld</div>
        <div class="card-content card-content-padding card-description">
          <p class="subtitle">Home of De Paarsen</p>
          <p>Grasveld naast de Galderse meren. Ingang in het bos, blijf gewoon doorlopen, als je bij Amsterdam aankomt ben je te ver gelopen.</p>
        </div>
        <div class="card-footer">
          <a
            href="https://www.google.nl/maps/place/Lavendel+Plus+B.V./@51.5472146,4.7905247,13.27z/data=!4m8!1m2!2m1!1slavendel!3m4!1s0x0:0x2665d836cd6632c!8m2!3d51.537794!4d4.7914124"
            class="external link"
            target="_blank"
          >Find on Map</a>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.card-header {
  height: 150px;
  color: #fff;
  }

.subtitle{
  color: #8e8e93;

}
.card{
  width: 280px;
  border: 1px solid black;
  box-shadow: 4px 8px rgba(0, 0, 0, 0.45);
  margin: 15px;
}
.card-description{
  height: 110px;
}
.inline{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card-footer{
  height: 10px;
}
.team1{
  background: url("../images/smurfendome.jpeg");
  background-size: cover;
  background-position: center;
}
.team2{
  background: url("../images/grasveld.jpg");
  background-size: cover;
  background-position: center;
}
.team3{
  background: url("../images/bak_vla.jpg");
  background-size: cover;
  background-position: center;
}
.team4{
  background: url("../images/stierenkooi.jpg");
  background-size: cover;
  background-position: center;
}
.team5{
  background: url("../images/oranjes.jpg");
  background-size: cover;
  background-position: center;
}
.team6{
  background: url("../images/lavendel.gif");
  background-size: cover;
  background-position: center;
}
.green{
  background: url("../images/gras.jpg");
  background-blend-mode: overlay;
  background-color: rgba(0, 209, 58, 0.7);
}
</style>
