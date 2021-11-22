<template>
    <div class="details-wrapper">
        <v-container class="mx-auto flex-grow-1 text-left black--text">
            <v-row>
                <v-col v-on:click="overlay = !overlay" xs="12" sm="12" md="12" lg="5" xl="5" class="pa-0">
                    <v-img
                        alt="Not found"
                        :width="$vuetify.breakpoint.mdAndUp ? 230 : 500"
                        aspect-ratio="1.4"
                        :src="ad.image"
                    ></v-img>
                </v-col>
                <v-col v-on:click="overlay = !overlay" xs="10" sm="10" md="10" lg="5" xl="5" class="detailsHolder">
                    <div>
                        <div>
                            <h4>{{ad.address}}</h4>
                            <p>{{ad.price}}</p>
                            <h5 v-if="showDate">{{ad.uploadDate}}</h5>
                        </div>
                    </div>
                </v-col>
                <v-col xs="2" sm="2" md="2" lg="2" xl="2" class="iconHolder">
                    <v-btn @click="changeFavouriteStatus(ad.adId)" :key="componentKey">
                        <v-icon
                            small
                            :color="isFavourite(ad.adId) ? 'yellow darken-2' : 'gray darken-2'"
                            >
                            mdi-star
                        </v-icon>
                    </v-btn>
                </v-col>    
            </v-row>
        </v-container>
        <v-overlay
        :value="overlay"
        :light=true
        :dark=false
        color='grey lighten-5'
        opacity=1
        >
            <Details @hideOverlay="overlay=false" :payload="ad"/>
        </v-overlay>  
    </div>
</template>

<script>
import Details from "../views/Details.vue";
const { changeFavourites, isFavourite } = require('../backend.js');

export default {
    name: 'ListItem',
    props: {
        ad: { type: Object, required: true},
        showDate: {type: Boolean, required: true}
    },
    components: {
        Details
    },
    methods: {
        changeFavouriteStatus(id) {
            changeFavourites(id);
            this.$emit('adChanged')
            this.componentKey += 1;
        },
        isFavourite(id) {
            return isFavourite(id);
        }
    },
    data () {
        return {
            componentKey: 0,
            overlay: false
        }
    }
}
</script>

<style>
.iconHolder {
    text-align: end;
}
.detailsHolder {
    text-align: start;
}
</style>