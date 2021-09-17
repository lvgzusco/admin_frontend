<template>
  <div class="userdetails">
    <div class="mb-6">
      <BookingDetails :title="title"/>
    </div>
    <div class="mb-6">
      <DetailsSm :title="'Booked by User'"/>
    </div>
    <div class="mb-6">
      <DetailsLg :title="'Owner'"/>
    </div>
    <div>
        <PropertyDetailsCard :title="'Property'"/>
    </div>
      
  </div>
</template>

<script>
import BookingDetails from '../../../components/generals/cards/BookingDetails.vue'
import DetailsLg from '../../../components/generals/cards/DetailsLg.vue'
import DetailsSm from '../../../components/generals/cards/DetailsSm.vue'
import PropertyDetailsCard from '../../../components/generals/cards/PropertyDetailsCard.vue'

export default {
  components:{
    BookingDetails,
    DetailsSm,
    DetailsLg,
    PropertyDetailsCard,
  },
  data(){
    return{
      title:"Booking"
    }
  }
}
</script>

<style>

</style>