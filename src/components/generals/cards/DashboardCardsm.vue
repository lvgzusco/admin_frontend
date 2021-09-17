<template>
  <v-card flat width="98%" class="pa-6 dashboard-card">
        <v-card-title class="pa-0 card-title">{{payload.title}}</v-card-title>
        <v-divider class="my-2" ></v-divider>

        <v-row justify="space-between">
            <v-col col="6">
                <p class="mb-0 users-label">Active {{payload.title}}</p>
                <h6 class="users-number">{{payload.data.active}}</h6>
            </v-col>
            <v-col col="6">
                <p class="mb-0 users-label">Total {{payload.title}}</p>
                <h6 class="users-number">{{payload.data.total}}</h6>
            </v-col>
        </v-row>
        <div v-if="payload.viewOnMap" class="mt-2">
            <v-icon color="#007AFF" small>mdi-google-maps</v-icon>
            <span class="view-on-map">View history on map</span>
        </div>
	</v-card>
</template>

<script>
export default {
    props:["payload"]
}
</script>

<style scoped>
	.dashboard-card{
		border-radius: 10px;
	}
	.card-title{
		color: var(--color-text-card-sm);
		text-align: left;
		font-weight: 500;
		letter-spacing: 0.69px;	
	}
	.users-label{
		color: var(--color-text-card-sm-2);
		font-size: .8rem;
	}
	.users-number{
		color: var(--color-text-card-sm);
		font-size: 1.2rem;
	}
	.view-on-map{
		font-size: .8rem;
		color: var(--color-view-on-map);
        cursor: pointer;
	}
</style>