<template>
    <div>
      <div class="list_header">
          <v-container elevation-2>
            <v-row >
              <v-col class="d-flex justify-start">
                <h5>Lista</h5>
              </v-col>
              <v-col class="d-flex justify-end">
                <div>{{adverts.ads.length}} db</div>
              </v-col>
            </v-row>
          </v-container>
      </div>
      <v-card class="my-3" v-for="data in adverts.ads" :key="data.adId">
        <ListItem :showDate="false" :ad="data"/>
      </v-card>
    </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import json from '../assets/listings.json';

export default {
    name: 'List',

    components: {
      ListItem
    },

     data: () => ({
      selectedItem: 1,
      adverts: json,
    })
}
</script>

<style>

</style>