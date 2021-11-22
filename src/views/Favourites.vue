<template>
    <div>
      <div class="list_header" :key="componentKey">
        <v-container elevation-2>
          <v-row >
            <v-col class="d-flex justify-start">
              <h5>Kedvencek</h5>
            </v-col>
            <v-col class="d-flex justify-end">
              <div>{{getTotalFavourites()}} db</div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-card class="my-3" v-for="data in adverts.ads" :key="data.adId">
        <ListItem @adChanged="refresh" v-if="isFavourite(data.adId)" :showDate="true" :ad="data" />
      </v-card>
    </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import json from '../assets/listings.json';
const { isFavourite, getTotalFavourites } = require('../backend.js');


export default {
    name: 'Favourites',

    components: {
      ListItem
    },

     data: () => ({
      selectedItem: 1,
      adverts: json,
      componentKey : 0
    }),
    methods: {
      refresh() {
        this.componentKey += 1;
      },
      getTotalFavourites() {
          return getTotalFavourites();
      },
      isFavourite(id) {
        return isFavourite(id);
      }
    },
}

</script>

<style>
.listitems_title {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 40px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
}
</style>