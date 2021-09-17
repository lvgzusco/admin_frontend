<template>
  <div class="sidebar">
    <ul class="sidebar__nav">
      <li 
      @click="setActiveComponent('Dashboard')" 
      :class="{'active': activeComponent === 'Dashboard'}" 
      >
        Home
      </li>
      <li 
        @click="setActiveComponent('Agent')" 
        :class="{'active': activeComponent === 'Agent'}"
      >
        Agent
      </li>
      <li
        @click="setActiveComponent('User')" 
        :class="{'active': activeComponent === 'User'}"
      >
        User
      </li>
      <li 
        @click="setActiveComponent('Properties')" 
        :class="{'active': activeComponent === 'Properties'}"
      >
        Properties
      </li>
      <li 
        @click="setActiveComponent('Bookings')" 
        :class="{'active': activeComponent === 'Bookings'}"
      >
        Bookings
      </li>
      <li 
        @click="setActiveComponent('Enquires')" 
        :class="{'active': activeComponent === 'Enquires'}"
      >Enquires
      </li>
      <li 
        @click="setActiveComponent('UserService')" 
        :class="{'active': activeComponent === 'UserService'}"
        >User Service
      </li>
      <li 
        @click="setActiveComponent('Advertisement')" 
        :class="{'active': activeComponent === 'Advertisement'}"
      >Advertisements
      </li>
      <li 
        @click="setActiveComponent('Notifications')" 
        :class="{'active': activeComponent === 'Notifications'}"
      >Notifications
      </li>
      <li 
        @click="setActiveComponent('HelpDesk')" 
        :class="{'active': activeComponent === 'HelpDesk'}"
      >Help Desk
      </li>
      <li 
        @click="setActiveComponent('TermsOfService')" 
        :class="{'active': activeComponent === 'TermsOfService'}"
      >Terms Of Service
      </li>
      <li 
        @click="setActiveComponent('TermsAndConditions')" 
        :class="{'active': activeComponent === 'TermsAndConditions'}"
      >Terms and Conditions
      </li>
      <li 
        @click="setActiveComponent('AboutUs')" 
        :class="{'active': activeComponent === 'AboutUs'}"
      >About Us
      </li>
      <router-link :to="'/'">
        <li  class="blue--text">Logout</li>
      </router-link>
      
    </ul>
  </div>
</template>

<script>
export default {
  props:['drawer'],
  data(){
    return{
      activeComponent: 'home',  
    }
  },
  mounted(){
    this.getRouterNameToSetComponent()
  },
  methods:{
    setActiveComponent(value){
      this.activeComponent = value
      if(this.$route.name !== this.activeComponent){
        this.$router.push({name: value});
      }
    },
    getRouterNameToSetComponent(){
      this.activeComponent = this.$route.name
    }
  }
}
</script>

<style>
  .sidebar__nav{
    background: #fff;
  }

  .sidebar .sidebar__nav{
    list-style: none;
    color: var(--color-text-general);
    padding: 0;
  }

  .sidebar__nav li{
    /* background: var(--color-hover); */
    padding: 5px 0;
    padding-left: 3rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all .2s ease-out;
    width: 100%;
  }

  .active{
    background: var(--color-hover);
  }

  .sidebar__nav li:hover{
    background: var(--color-hover);
  }
</style>