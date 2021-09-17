<template>
  <v-card flat>
		<div class="heading">
		{{title}} Details
		</div>
		<div class="userdetail-content pa-5">

      <v-row>
        <v-col cols="3">
          <div class="userdetail-title">Id</div>
          <p class="mb-0 userdetail_info">#123</p>
          <v-divider></v-divider>
        </v-col>
        <v-col  cols="3">
          <div class="userdetail-title">CREATED</div>
          <p class="mb-0 userdetail_info">04:23 PM 25 June, 2015</p>
          <v-divider></v-divider>
        </v-col>
        <v-col  cols="3">
          <div class="userdetail-title">BOOKED AT</div>
          <p class="mb-0 userdetail_info">04:23 PM 25 June, 2015</p>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="3">
          <div class="userdetail-title">User Status</div>
          <p class="mb-0 userdetail_info color-active">ACTIVE</p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <div class="userdetail-title">TITLE</div>
          <p class="mb-0 userdetail_info">Want to visit to buy home</p>
          <v-divider></v-divider>
        </v-col>
        <v-col  cols="9">
          <div class="userdetail-title">SHORT INFO</div>
          <p class="mb-0 userdetail_info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
          <v-divider></v-divider>
        </v-col>
        
      </v-row>
      <v-row>
        <v-col cols="3">
          <div class="userdetail-title">CANCLE AT</div>
          <p class="mb-0 userdetail_info">04:23 PM 25 June, 2015</p>
          <v-divider></v-divider>
        </v-col>
        <v-col  cols="9">
          <div class="userdetail-title">CANCEL REASON</div>
          <p class="mb-0 userdetail_info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt</p>
          <v-divider></v-divider>
        </v-col>
        
      </v-row>
		</div>
  </v-card>
</template>

<script>
export default {
  props:['title']
}
</script>

<style>
.userdetail_info{
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	font-weight: 400;
}

.color-active{
	color: #4CD964;
}
</style>