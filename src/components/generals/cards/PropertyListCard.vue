<template>
  <v-card flat>
    <div class="heading">
			{{title}} Properties
		</div>
    <v-row class="py-2 ">
      <v-col cols="6">
        <div class="property_detail pb-1">
          <v-img width="10%" height="110px" contain src="../../../assets/img/prop-2-1-big.png" alt="img"></v-img>
          <div class="property_detail_content ">
            <h4 class="property_detail_name">Chic Apartment in Downtown</h4>
            <p class="my-2 property_detail_address">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
            <div class="property_detail_amount">
              <p class="mb-0">&#x20A6; 980,000</p>
              <ActiveBtn/>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="property_detail pb-1">
          <v-img width="10%" height="110px" contain src="../../../assets/img/prop-2-1-big.png" alt="img"></v-img>
          <div class="property_detail_content ">
            <h4 class="property_detail_name">Chic Apartment in Downtown</h4>
            <p class="my-2 property_detail_address">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
            <div class="property_detail_amount">
              <p class="mb-0">&#x20A6; 980,000</p>
              <ActiveBtn/>
            </div>
          </div>
        </div>
      </v-col>

    </v-row>
    <v-row class="py-2 ">
      <v-col cols="6">
        <div class="property_detail pb-1">
          <v-img width="10%" height="110px" contain src="../../../assets/img/prop-2-1-big.png" alt="img"></v-img>
          <div class="property_detail_content ">
            <h4 class="property_detail_name">Chic Apartment in Downtown</h4>
            <p class="my-2 property_detail_address">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
            <div class="property_detail_amount">
              <p class="mb-0">&#x20A6; 980,000</p>
              <ActiveBtn/>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="property_detail pb-1">
          <v-img width="10%" height="110px" contain src="../../../assets/img/prop-2-1-big.png" alt="img"></v-img>
          <div class="property_detail_content ">
            <h4 class="property_detail_name">Chic Apartment in Downtown</h4>
            <p class="my-2 property_detail_address">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
            <div class="property_detail_amount">
              <p class="mb-0">&#x20A6; 980,000</p>
              <ActiveBtn/>
            </div>
          </div>
        </div>
      </v-col>

    </v-row>
    <v-row class="py-2 ">
      <v-col cols="6">
        <div class="property_detail pb-1">
          <v-img width="10%" height="110px" contain src="../../../assets/img/prop-2-1-big.png" alt="img"></v-img>
          <div class="property_detail_content ">
            <h4 class="property_detail_name">Chic Apartment in Downtown</h4>
            <p class="my-2 property_detail_address">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
            <div class="property_detail_amount">
              <p class="mb-0">&#x20A6; 980,000</p>
              <ActiveBtn/>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="property_detail pb-1">
          <v-img width="10%" height="110px" contain src="../../../assets/img/prop-2-1-big.png" alt="img"></v-img>
          <div class="property_detail_content ">
            <h4 class="property_detail_name">Chic Apartment in Downtown</h4>
            <p class="my-2 property_detail_address">7250 Keele St, Concord, ON L4K 1Z8, Canada </p>
            <div class="property_detail_amount">
              <p class="mb-0">&#x20A6; 980,000</p>
              <ActiveBtn/>
            </div>
          </div>
        </div>
      </v-col>

    </v-row>
    <div class="pagination px-2 py-4">
      <div class="pagination__btn pagination__active mr-2">
        1
      </div>
      <div class="pagination__btn mr-2">2</div>
      <div class="pagination__btn mr-2">3</div>
      <div class="pagination__btn mr-2">4</div>
      <div class="pagination__btn mr-3 next">NEXT</div>
    </div>
  </v-card>
</template>

<script>
import ActiveBtn from '../buttons/ActiveBtn.vue'
export default {
  props:["title"],
  components:{
    ActiveBtn
  }
}
</script>

<style>
.heading{
	padding: 5px 10px;
	color: var(--color-text-general);
	background: #e8e8e8;
	font-weight: 500;
}

.property_detail{
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-left: 10px;
  margin-right: 20px;
}

.property_detail_content{
  max-width: 70%;
}
.property_detail_name{
  font-weight: 600;
  font-size: 20px;
}
.property_detail_address{
  font-size: 15px;
}
.property_detail_amount{
  display: flex;
  justify-content: space-between;
  align-items: center;
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