<template>
  <v-container>
    <v-row justify="space-around">
      <v-card flat width="300" class="pa-3">
        <h2 class="text-center cardlogo mb-3">Zuzco</h2>
        <div class="input mb-3">
          <input type="text" placeholder="Email Address"/>
        </div>
        <div class="input mb-3">
          <input type="password" placeholder="Password"/>
        </div>
        <v-btn to="/dashboard" depressed block color="#1AB7CC" class="white--text">
          SUBMIT
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
export default {
    data: () => ({
      reveal: false,
    }),
}
</script>



<style scoped>
.cardlogo{
  font-weight: 700;
  color: #1AB7CC;
  font-size: 2.5rem;

}

.input input{
  width: 100%; 
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 0.5px solid #C7C7CC;
  border-radius: 2px;
  opacity: 1;
  padding: 5px 8px;
  font-size: 1rem;
  color: var(--color-text-general);
}
</style>