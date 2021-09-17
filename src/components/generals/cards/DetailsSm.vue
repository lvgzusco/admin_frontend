<template>
  <v-card flat>
		<div class="heading">
		{{title}} Details
		</div>
		<div class="userdetail-content pa-5">
			<v-card-title class="pa-0 mb-3">
				<v-avatar tile size="35">
					<img
						contain
						alt="user"
						src="../../../assets/img/profile.png"
					>
				</v-avatar>
				<p class="ml-3 mb-0">
					Ayodeji Longe
				</p>
			</v-card-title>

		<v-row>
			<v-col cols="4">
				<div class="userdetail-title">Username</div>
				<p class="mb-0 userdetail_info">ayodeji.longe</p>
				<v-divider></v-divider>
			</v-col>
			<v-col  cols="4">
				<div class="userdetail-title">Email</div>
				<p class="mb-0 userdetail_info">ayodejilonge21@gmail.com</p>
				<v-divider></v-divider>
			</v-col>
			<v-col  cols="4">
				<div class="userdetail-title">Phone</div>
				<p class="mb-0 userdetail_info">+923008134076</p>
				<v-divider></v-divider>
			</v-col>
			
		</v-row>
		</div>
  </v-card>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style>
.heading{
	padding: 5px 10px;
	color: var(--color-text-general);
	background: #e8e8e8;
	font-weight: 500;
}
.userdetail-content{
	color: var(--color-text-general);

}
.userdetail-title{
	font-size: 15px;
	font-weight: 500;
	text-transform: uppercase;
}
.userdetail_info{
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	font-weight: 400;
}

</style>