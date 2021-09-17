<template>
  <div class="userdetails">
    <div class="mb-6">
      <DetailsSm :title="title"/>
    </div>
    <div>
      <PropertyListCard :title="title"/>
    </div>
      
  </div>
  
</template>

<script>
import DetailsSm from '../../../components/generals/cards/DetailsSm.vue'
import PropertyListCard from '../../../components/generals/cards/PropertyListCard.vue'

export default {
  components:{
    DetailsSm,
    PropertyListCard
  },
  data(){
    return{
      title:"User"
    }
  }
}
</script>
