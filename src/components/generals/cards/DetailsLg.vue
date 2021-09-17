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
			<v-col cols="3">
				<div class="userdetail-title">Username</div>
				<p class="mb-0 userdetail_info">ayodejilonge</p>
				<v-divider></v-divider>
			</v-col>
			<v-col  cols="3">
				<div class="userdetail-title">Email</div>
				<p class="mb-0 userdetail_info">ayodeji.longe@gmail.com</p>
				<v-divider></v-divider>
			</v-col>
			<v-col  cols="3">
				<div class="userdetail-title">Phone</div>
				<p class="mb-0 userdetail_info">+923008134076</p>
				<v-divider></v-divider>
			</v-col>
			<v-col cols="3">
				<div class="userdetail-title">Business Name</div>
				<p class="mb-0 userdetail_info">EnnVisions</p>
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="3">
				<div class="userdetail-title">Business Started</div>
				<p class="mb-0 userdetail_info">june 25, 2015</p>
				<v-divider></v-divider>
			</v-col>
			<v-col  cols="3">
				<div class="userdetail-title">Business Registration</div>
				<p class="mb-0 userdetail_info">Business doc.jpeg <v-icon class="rotate-90" color="blue">mdi-attachment</v-icon></p>
				<v-divider></v-divider>
			</v-col>
			<v-col  cols="3">
				<div class="userdetail-title">Supporting Documents</div>
				<p class="mb-0 userdetail_info">Supporting Doc.jpeg <v-icon class="rotate-90" color="blue">mdi-attachment</v-icon></p>
				<v-divider></v-divider>
			</v-col>
			<v-col cols="3">
				<div class="userdetail-title">User Status</div>
				<p class="mb-0 userdetail_info color-active">ACTIVE</p>
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="6">
				<div class="userdetail-title">Address</div>
				<p class="mb-0 userdetail_info">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
				<v-divider></v-divider>
			</v-col>
			
			<v-col  cols="3">
				<div class="userdetail-title">Subscribe Plan</div>
				<p class="mb-0 userdetail_info">Monthly Plan ($9.00)</p>
				<v-divider></v-divider>
			</v-col>
			<v-col cols="3">
				<div class="userdetail-title">Plan Expire</div>
				<p class="mb-0 userdetail_info">25 june, 2015</p>
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
/* .rotate-90{
	transform: rotateY(270deg);
} */
.color-active{
	color: #4CD964;
}
</style>