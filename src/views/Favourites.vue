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
        <v-container elevation-2 class="sortContainer">
          <v-row>
            <v-col class="d-flex justify-start">
              <v-btn @click="sortItems('uploadDate')">Date
                <v-icon v-show="orderAsc" small>mdi-sort-calendar-ascending</v-icon>
                <v-icon v-show="!orderAsc" small>mdi-sort-calendar-descending</v-icon>
              </v-btn>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn @click="sortItems('address')">Address
                <v-icon v-show="orderAsc" small>mdi-sort-ascending</v-icon>
                <v-icon v-show="!orderAsc" small>mdi-sort-descending</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-card class="my-3" v-for="data in orderedItems" :key="data.adId">
        <ListItem @adChanged="refresh" v-if="isFavourite(data.adId)" :showDate="true" :ad="data" />
      </v-card>
    </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import json from '../assets/listings.json';
const { isFavourite, getTotalFavourites } = require('../backend.js');
const _ = require('lodash');

export default {
    name: 'Favourites',

    mounted(){
      this.sortItems('uploadDate');
    },

    components: {
      ListItem
    },

     data: () => ({
      selectedItem: 1,
      adverts: json,
      componentKey : 0,
      orderedItems: [],
      orderAsc: false
    }),
    methods: {
      sortItems(orderType) {
        this.orderAsc = !this.orderAsc;
        this.orderedItems = _.orderBy(this.adverts.ads, orderType, this.orderAsc ? 'asc' : 'desc')
      },
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

.sortContainer {
  margin-top: 5%;
}
</style>