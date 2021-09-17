<template>
  <Table :header="header" :desserts="desserts"/>
</template>

<script>
import Table from '../../../components/tables/Table.vue'

  export default {
  components: { Table },
  
    data () {
      return {
        header:{
          id: 'Id',
          propertyTitle: 'Properties Title',
          propertyFee: 'property Fees',
          status: 'Status',
          action: 'Actions'
        },
        desserts: [
          {
            id: 1,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 2,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 3,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 4,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 5,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 6,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 7,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 8,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 9,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 10,
            propertyTitle: 'Condo for sale, Richmond Hill Younge & 16th luxury condo',
            propertyFee: '8520.22',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
        
        ],
      }
    },
  }
</script>

<style>
  
</style>