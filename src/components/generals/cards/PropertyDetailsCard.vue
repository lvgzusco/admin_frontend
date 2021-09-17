<template>
  
    <v-card flat>
      <div class="heading">
        {{title}} Details
      </div>
      <img
        src="../../../assets/img/property@2x.png"
        width="884px"

      />
      
        <v-card-title class="text-h4">
          Beautiful Detached Home For Sale!
        </v-card-title>
        <div class="amount mx-4">
          <p>&#x20A6;1,359,900</p>
          <v-btn depressed small color="#4CD964" class="btn-active py-0">Active</v-btn>
        </div>
        <p class="ml-4 mb-1"><span class="">Address:</span> 563 JEAN STREET, BANANA ISLAND, LAGOS </p>
        <p class="ml-4 mb-1"><span >Property type:</span> House</p>
        <p class="ml-4 mb-1"><span >Shortlet:</span> No</p>
        <p class="ml-4 mb-1"><span >Label:</span> Semi-Detached Duplex</p>
        <p class="ml-4 mb-1"><span >Date listed:</span> October 21, 2020</p>

        <v-card-title class="text-h5 ml-2">Amenities</v-card-title>
        <div class="amenities">
          <p class="mr-3">3 - Bedrooms</p>
          <p class="mr-3">3 - Bathrooms</p>
          <p>Area 3133 sq.km</p>
        </div>

        <v-card-title class="text-h5 ml-2 py-1">Description</v-card-title>
        <v-card-subtitle class="description">Pride Of Ownership With Exquisite Taste & Upscale Finishes . Upgraded From Top To Bottom, Nothing Was Spared M/F Has Open Concept Great For The Entertainer, Large Kitchen & Dining Area With Many Built Ins & High End Appliances, 2nd Floor Boasts Wainscoting, Bamboo Fls, L/L Home Cinema Feel With Built Wall Units, Surround Sound System, Drop Down Projector Screen, His/Hers Dream Garage With B/I Cabinets, Reclaimed Wood Wall, Tv, Pot Lights, Epoxy Flrs, Extras:S/S 6 Burner Gas Range, S/S Fridge, S/S Dishwasher. S/S B/I Microwave, S/S 2 B/I Bar/Wine Fridge, S/S Range Hood, Washer, Dryer, Cv (No Attachments),Alarm, Nest </v-card-subtitle>


        <v-card-title class="text-h5 ml-2">Key Features</v-card-title>
        <v-row class="px-4">
          <v-col cols="4">
            <p class="mb-0 pl-3 pb-2 key-features-items">Internet</p>
          </v-col>
          <v-col cols="4">
            <p class="mb-0 pl-3 pb-2 key-features-items">Garage</p>
          </v-col>
          <v-col cols="4">
            <p class="mr-3 mb-0 pl-3 pb-2 key-features-items">Air Condition</p>
          </v-col>
        </v-row>
        <v-row class="px-4">
          <v-col cols="4">
            <p class="mb-0 pl-3 pb-2 key-features-items">Dishwasher</p>
          </v-col>
          <v-col cols="4">
            <p class="mb-0 pl-3 pb-2 key-features-items">Disposer</p>
          </v-col>
          <v-col cols="4">
            <p class="mr-3 pl-3 mb-0 pb-2 key-features-items">Balcony</p>
          </v-col>
        </v-row>
        <v-row class="px-4">
          <v-col cols="4">
            <p class="mb-0 pl-3 pb-2 key-features-items">Gym</p>
          </v-col>
          <v-col cols="4">
            <p class="mb-0 pl-3 pb-2 key-features-items">Playroom</p>
          </v-col>
          <v-col cols="4">
            <p class="mr-3 pl-3 mb-0 pb-2 key-features-items">Bar</p>
          </v-col>
        </v-row>
        <v-card-title class="text-h5 ml-2 pt-4 pb-3">Other Features</v-card-title>
        <v-card-subtitle class="description">Pride Of Ownership With Exquisite Taste & Upscale Finishes . Upgraded From Top To Bottom, Nothing Was Spared M/F Has Open Concept Great For The Entertainer, Large Kitchen & Dining Area With Many Built Ins & High End Appliances, 2nd Floor Boasts Wainscoting, Bamboo Fls, L/L Home Cinema Feel With Built Wall Units, Surround Sound System, Drop Down Projector Screen, His/Hers Dream Garage With B/I Cabinets, Reclaimed Wood Wall, Tv, Pot Lights, Epoxy Flrs, Extras:S/S 6 Burner Gas Range, S/S Fridge, S/S Dishwasher. S/S B/I Microwave, S/S 2 B/I Bar/Wine Fridge, S/S Range Hood, Washer, Dryer, Cv (No Attachments),Alarm, Nest 
        </v-card-subtitle>
        <v-card-title class="text-h5 ml-2">Gallery and Floor Plan</v-card-title>
        <div class="gallery mb-4">
          <div class="img-left">
            <v-img width="97%" height="413px" src="../../../assets/img/property_5.png" ></v-img>
          </div>
          <div class="img-right">
            <v-row >
              <v-col class="px-0" cols="6">
                <v-img width="97%" height="200px" contain src="../../../assets/img/property_4.png"></v-img>
              </v-col>
              <v-col class="px-0" cols="6">
                <v-img width="97%" height="200px" contain src="../../../assets/img/property_4.png"></v-img>
              </v-col>
            </v-row>
            <v-row >
              <v-col cols="6" class="px-0 pt-0">
                <v-img width="97%" height="200px" contain src="../../../assets/img/property_3.png"></v-img>
              </v-col>
              <v-col cols="6" class="px-0 pt-0 relative">
                <v-img width="97%" height="200px" contain src="../../../assets/img/property_3.png"></v-img>
                <v-btn class="show_gallery">See All Photos</v-btn>
              </v-col>
            </v-row>      
          </div>
          
        </div>
        <v-card-title class="text-h5 ml-2 pt-4 pb-3">Safety Tips</v-card-title>
          <v-card-subtitle class="description">Pride Of Ownership With Exquisite Taste & Upscale Finishes . Upgraded From Top To Bottom, Nothing Was Spared M/F Has Open Concept Great For The Entertainer, Large Kitchen & Dining Area With Many Built Ins & High End Appliances, 2nd Floor Boasts Wainscoting, Bamboo Fls, L/L Home Cinema Feel With Built Wall Units, Surround Sound System, Drop Down Projector Screen, His/Hers Dream Garage With B/I Cabinets, Reclaimed Wood Wall, Tv, Pot Lights, Epoxy Flrs, Extras:S/S 6 Burner Gas Range, S/S Fridge, S/S Dishwasher. S/S B/I Microwave, S/S 2 B/I Bar/Wine Fridge, S/S Range Hood, Washer, Dryer, Cv (No Attachments),Alarm, Nest 
          </v-card-subtitle>
          <div class="disclaimer">
            <v-card-title class="text-h5 ml-2 pt-4 pb-3">Disclaimer</v-card-title>
            <v-card-subtitle class="description">Pride Of Ownership With Exquisite Taste & Upscale Finishes . Upgraded From Top To Bottom, Nothing Was Spared M/F Has Open Concept Great For The Entertainer, Large Kitchen & Dining Area With Many Built Ins & High End Appliances, 2nd Floor Boasts Wainscoting, Bamboo Fls, L/L Home Cinema Feel With Built Wall Units, Surround Sound System, Drop Down Projector Screen, His/Hers Dream Garage With B/I Cabinets, Reclaimed Wood Wall, Tv, Pot Lights, Epoxy Flrs, Extras:S/S 6 Burner Gas Range, S/S Fridge, S/S Dishwasher. S/S B/I Microwave, S/S 2 B/I Bar/Wine Fridge, S/S Range Hood, Washer, Dryer, Cv (No Attachments),Alarm, Nest 
            </v-card-subtitle>
          </div>
    </v-card>
 
</template>

<script>
export default {
props:["title"]
}
</script>

<style>
.amount{
  display: flex;
  justify-content: space-between;
}

.amount p{
  font-size: 23px;
  color: #4d4d4d;
}
.property_detail_card{
  padding: 20px;
}

.amenities{
  display: flex;
  margin-left: 20px;
}
.amenities p{
  width: 30%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.description{
  max-width: 750px;
  color: #000 !important;
  margin-top: 1px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 10px;
  margin-right: 10px;
}

.key-features-items{
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.gallery{
  height: 400px;
  display: flex;
  /* justify-content: space-between; */
  
}

.img-left, .img-right{
  width: 49.9%;
}

.img-right{
  padding: 0 2px;
}

.show_gallery{
  position: absolute;
  background: #fff;
  bottom: 30px;
  right: 36px;
}

.disclaimer{
  background: #F3F3F3;
}
.disclaimer .description{
  border-bottom: 0;
}

.relative{
  position: relative;

}
</style>