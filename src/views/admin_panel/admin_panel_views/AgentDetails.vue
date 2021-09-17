<template>
<div class="agentdetails">
	<div class="mb-6">
		<DetailsLg :title="title"/>
	</div>
	<div>
		<PropertyListCard :title="title"/>
	</div>
    
</div>
  
</template>

<script>
import DetailsLg from '../../../components/generals/cards/DetailsLg.vue'
import PropertyListCard from '../../../components/generals/cards/PropertyListCard.vue'

export default {
  components:{
    DetailsLg,
    PropertyListCard
  },
	data(){
		return{
			title:'Agent'
		}
	}
}
</script>