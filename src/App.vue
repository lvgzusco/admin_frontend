<template>
  <div id=app>
    <v-app >
      <Header v-if="this.$route.name !=='Landing'" @setDrawer="setDrawer" @setHeaderHeight="setHeaderHeight"/>

        <div class="sidebar__layout" v-if="drawer">
          <Sidebar drawer v-if="this.$route.name !=='Landing'"/>
        </div>
      <div class="content">
        <div v-if="drawer" class="sidebar__underg">
          
        </div>
        <div :style="$route.name !== 'Landing'? contentHeight:''" class="router-view">
          <div :class="$route.name !== 'Landing'? 'router-view-container':''">
            <router-view/>
          </div>
          
        </div>
      </div>
      <Popups v-if="popup"/>
    </v-app>
  </div>
  
</template>

<script>
import Popups from './components/generals/popup/Popups.vue';
import Header from './components/layout/Header.vue'
import Sidebar from './components/layout/Sidebar.vue'
export default {
  name: 'App',
  data(){
    return{
      drawer: true,
      popup: true, 
      headerHeight:'',
    }
  },
  components:{
    Header,
    Sidebar,
    Popups
  },
  methods:{
    setDrawer(){
      this.drawer = !this.drawer
    },
    setHeaderHeight(headerHeight){
      this.headerHeight = headerHeight 
    }
  },
  computed:{
    contentHeight(){
      return{
        /* "min-height": `calc(100vh - ${this.headerHeight})` */
        "padding-top": this.headerHeight,
        "min-height": `calc(100vh)`
      }
    }
  }
};
</script>

<style>
:root{
  --color-bg: #EAF2FF;
  --color-text-general: #333333;
  --color-text-card-sm: #3D3D3D;
  --color-text-card-sm-2: #4D4D4D;
  --color-view-on-map: #007AFF;
  --color-logout: #0A84FF;
  --color-hover: #F0FAF5;
  --color-detail-bg: #E8E8E8;
}

/* background: var(--unnamed-color-ebf2f7) 0% 0% no-repeat padding-box;
background: #EBF2F7 0% 0% no-repeat padding-box; */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  overflow-y: auto !important;
}
/* #app{
  font-family: 'Poppins';
  
}
 */
a{
  text-decoration: none;
}
.content{
  display: flex;
}

.sidebar__layout{
  position: fixed;
  top: 60px;
  width: 25%;
  
}

.sidebar__underg{
  flex-basis: 25%;
}

.router-view{
flex-grow: 1;
background:var(--color-bg);
height: 100%;
padding-bottom: 40px;
}
.router-view-container{
  padding-top: 3rem;
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
