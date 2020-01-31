<template>
  <f7-page id="main" name="home" class="greenish">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>NYSL Revenge</f7-nav-title>
      <f7-nav-right>
        <p>Schedule:</p>
        <f7-link
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
          panel-open="right"
        ></f7-link>
      </f7-nav-right>
      <f7-nav-title-large sliding>NYSL Revenge</f7-nav-title-large>
    </f7-navbar>
    <!-- Page content-->
    <f7-block class="centered">
      <h2>Contact NYSL Revenge™</h2>
      <p>If you need to contact anyone for matters not found on the website, you can contact us at:</p>
      <br />
      <div>
        Caretaker 321
        <br />123 Fake Street
        <br />Springfield, MO 55555
      </div>
    </f7-block>
    <f7-block strong class="green">
      <f7-row>
        <f7-col width="40">
          <f7-button fill raised login-screen-open="#my-login-screen" class="button">Login Screen</f7-button>
        </f7-col>
        <f7-col width="40">
          <f7-button fill raised popup-open="#my-popup">Logout</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<style scoped>
.centered {
  text-align: center;
}

h2 {
  margin-bottom: 30px;
}
.green {
  background: url("../images/gras.jpg");
  background-blend-mode: overlay;
  background-color: rgba(0, 209, 58, 0.7);
}
.greenish {
  background-color: rgb(235, 253, 235);
}
.button {
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 3px 6px rgba(0, 0, 0, 0.45);
}
</style>