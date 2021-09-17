<template>
  <div class="home">   
    <Signin/>
  </div>
</template>

<script>
// @ is an alias to /src

import Signin from '@/components/authentication/Signin.vue'
//import Signin from './authentication/Signin.vue'

export default {
  name: 'Landing',
  components: {
    Signin
  }
}
</script>

<style scoped>
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--unnamed-color-eaf2ff) 0% 0% no-repeat padding-box;
    background: #EAF2FF 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 100vh;
    width: 100vw;
    position: relative;
  }
</style>