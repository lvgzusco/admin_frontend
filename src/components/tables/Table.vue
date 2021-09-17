<template>
  <div>
  <v-simple-table >
    <template v-slot:default>
      <thead class="thead">
        <tr>
          <th class="th">
            {{header.id}}
          </th>
          <th v-if="header.name" class="th">
            {{header.name}}
          </th>
          <th v-if="header.email" class="th">
            {{header.email}}
          </th>
          <th v-if="header.propertyTitle" class="th">
            {{header.propertyTitle}}
          </th>
          <th v-if="header.bookingTime" class="th">
            {{header.bookingTime}}
          </th>
          <th v-if="header.propertyFee" class="th">
            {{header.propertyFee}}
          </th>
          <th v-if="header.mobile" class="th">
            {{header.mobile}}
          </th>
          <th class="th">
            {{header.status}}
          </th>
          <th class="th">
            {{header.action}}
          </th>
        </tr>
      </thead>
      <tbody id="tbody">
        <tr
          v-for="item in desserts"
          :key="item.id"
          @click="showDetails"
        >
          <td>
            <div class="id">
              <div class="mr-4">{{ item.id }}</div>
              <div class="time">22 june, 2020</div>
              <v-img width="20px" max-height="30px" contain src="../../assets/img/profile.png" alt="img"></v-img>
            </div>           
          </td>
          <td v-if="item.name">{{ item.name }}</td>
          <td v-if="item.email">{{ item.email }}</td>
          <td v-if="item.bookingTime">{{item.bookingTime}}</td>
          <td v-if="item.propertyTitle" class="">{{ item.propertyTitle }}</td>
          <td v-if="item.propertyFee">&#x20A6;{{ item.propertyFee }}</td>
          <td v-if="item.mobile">{{item.mobile}}</td>
          <td><ActiveBtn/></td>
          <td>
            <div class="actions">
              <span class="actions__btn edit mr-2" color="#4CD964">Edit</span> 
              |
              <span class="actions__btn delete ml-2" color="#FE0000" >Delete</span> 
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div class="pagination mt-4">
    <div class="pagination__btn pagination__active mr-2">
      1
    </div>
    <div class="pagination__btn mr-2">2</div>
    <div class="pagination__btn mr-2">3</div>
    <div class="pagination__btn mr-2">4</div>
    <div class="pagination__btn mr-3 next">NEXT</div>
  </div>
</div>
</template>

<script>
import ActiveBtn from '../generals/buttons/ActiveBtn.vue'
export default {
  components: { ActiveBtn },
  props:['header', 'desserts'],
  methods:{
    showDetails(){
      let route = this.$route.name
      if(route === "Agent"){
        this.$router.push({name:'AgentDetails'})
      }else
      if(route === "User"){
        this.$router.push({name:'UserDetails'})
      }else
      if(route === "Bookings"){
        this.$router.push({name:'BookingsDetails'})
      }else
      if(route === "Properties"){
        this.$router.push({name:'PropertyDetails'})
      }
    }
  }
}
</script>

<style>
.thead{
    background: #E8E8E8;
    
  }
  .th{
    color: var(--color-text-general) !important;
    font-weight: 500;
    font-size: 1rem !important;
  }
  #tbody tr{
    cursor: pointer;
    
  }
  #tbody tr td{
    color: var(--color-text-general);   
    height: 42px !important;
  }
  .id{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .time{
    width: 40px;
    font-size: 10px;
  }

  .actions{
    display: flex;
    align-items: center;
   
    
  }

  .edit{
    color: #373E8E;
  }
 .delete{
   color:#FE0000;
 }

 .pagination{
   display: flex;
   height: max-content;
 }

 .pagination__btn{
   font-weight: 500;
   font-size: larger;
   height: 22px;
   cursor: pointer;
 }

  .pagination__active{
    color: #007AFF;
    border-bottom: 1px solid #007AFF;
  }
</style>