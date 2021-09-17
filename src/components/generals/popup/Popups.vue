<template>
  <v-row justify="center">
    <!-- <v-btn
      class="white--text"
      color="teal"
      @click="overlay = !overlay"
    >
      Show Overlay
    </v-btn> -->

    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      :opacity="0.8"
    >
      <v-card width="300px" flat class="rounded-lg overlay pt-3 pb-2 px-2">
        <h2 class="text-center overlay__title dss">Confirmation Needs!</h2>
        <p class="text-center overlay__content ">Your Account has been Registered successfully</p>
        <v-btn
          class="white--text"
          color="#4CD964"
          @click="overlay = false"
          block
          small
        >
          Okay
        </v-btn>
      </v-card>
      
    </v-overlay>
  </v-row>
</template>

<script>

  export default {
    data: () => ({
      overlay: true,
      zIndex: 0,
    }),

  }
</script>

<style>
  .overlay{
    background: #fff !important;
    
  }

  .overlay__title{
    color: #00B0E9;
  }

  .overlay__content{
    color: #000;

  }

  .dss{
    color: #4CD964;
  }
  .error{
    color: red;
  }
</style>