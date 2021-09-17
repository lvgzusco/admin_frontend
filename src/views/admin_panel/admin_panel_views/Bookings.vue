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
          name: 'Full Name',
          email: 'Email Address',
          bookingTime: 'BookingTime',
          status: 'Status',
          action: 'Actions'
        },
        desserts: [
          {
            id: 1,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 2,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 3,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 4,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 5,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 6,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 7,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 8,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 9,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
            status: 'active',
            img_path: '../../assets/img/profile.png'
          },
          {
            id: 10,
            name: 'Ayodeji Longe',
            email: 'ayodejilonge21@gmail.com',
            bookingTime: '04:23 PM 25 June, 2015',
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