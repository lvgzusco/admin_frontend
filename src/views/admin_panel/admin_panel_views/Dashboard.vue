<template>
    <div class="dashboard">
      <v-container>
				<v-row >
					<v-col cols="4 user">
						<dashboardCardsm :payload="user"/>
					</v-col>
					<v-col cols="4 agent">
						<dashboardCardsm :payload="agent" />
					</v-col>
					<v-col cols="4 properties">
						<dashboardCardsm :payload="properties"/>
					</v-col>
					
				</v-row>
				<v-row>
					<v-col cols="4">
						<div class="mb-5 enquires">
							<dashboardCardsm :payload="bookings"/>
						</div>
						<div class="booking">
							<dashboardCardsm :payload="enquires" />
						</div>
						
					</v-col>
					<v-col cols="8">
						<dashboardCardsm :payload="gragh"/>
					</v-col>
				</v-row>
			</v-container>
    </div>
</template>

<script>
	import DashboardCardsm from '../../../components/generals/cards/DashboardCardsm.vue'
		
	export default {
		components: { DashboardCardsm },
		data(){
			return{
				user:{
					isFetchingData:false,
					viewOnMap:true,
					title:'User',
					data:{
						active: 13813,
						total:	40343
					}
				},
				agent:{
					isFetchingData: false,
					viewOnMap:true,
					title:'Agent',
					data:{
						active: 13813,
						total:	40343
					}
				},
				properties:{
					isFetchingData:false,
					viewOnMap:true,
					title:'Properties',
					data:{
						active: 13813,
						total:	40343
					}
				},
				bookings:{
					isFetchingData:false,
					viewOnMap:false,
					title:'Bookings',
					data:{
						active: 13813,
						total:	40343
					}
				},
				enquires:{
					isFetchingData:false,
					viewOnMap:false,
					title:'Enquires',
					data:{
						active: 13813,
						total:	40343
					}
				},
				gragh:{
					isFetchingData: false,
					viewOnMap: false,
					title: 'Map',
					data:{
						active: 'coming soon',
						total: 'coming soon'
					}
				}
			}
		}
	}
</script>

<style scoped>

</style>