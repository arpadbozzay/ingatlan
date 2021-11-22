<template>
  <div class="detailsWrapper">
    <v-container>
        <v-row >
            <v-col class="text-left"  cols="4">
                <v-btn @click="emitOverlay" class="indigo--text">
                    <v-icon
                        medium
                        color="indigo"
                        >
                        mdi-arrow-left-bold
                    </v-icon>
                    Vissza
                </v-btn>
            </v-col>
            <v-col v-show="$vuetify.breakpoint.mdAndUp" cols="8">
                <v-container class="text-left" elevation-2>
                    <v-row>
                        <v-col cols="12">
                            <h5>Részletek</h5>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
        </v-container>
        <v-container>
            <v-row>
                    <v-col >
                    <v-img
                        alt="Not found"
                        :max-width="$vuetify.breakpoint.mdAndUp ? 230 : 450"
                        aspect-ratio="1.4"
                        :src="payload.image"
                    ></v-img>
                </v-col>
            </v-row>
            <v-row>
                <v-card
                    class="mx-auto text-left"
                    max-width="100%">
                    <v-card-text>
                    <p class="text-h4 text--primary">
                        {{payload.address}}
                    </p>
                    <div class="text-h5 text--primary">
                        <br>{{payload.price}}                            
                    </div>
                    <p class="text--primary">{{payload.uploadDate}}</p>
                    <p>{{payload.description}}</p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <div class="text-center">
                            <v-dialog
                                v-model="dialog"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                    color="primary"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    Kapcsolatfelvétel
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-text class="text-left">
                                        <p class="text-h5 text--primary">Email</p>
                                        <p>
                                            {{payload.contact.email}}
                                        </p>
                                        <p class="text-h5 text--primary">Phone</p>
                                        <div >
                                            <ul id="example-1">
                                                <li v-for="phone in payload.contact.parsedPhoneNumbers" :key="phone">
                                                    {{ phone }}
                                                </li>
                                            </ul>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
  </div>
</template>

<script>
export default {
    name: "Details",

    props: ['payload'],
    data () {
      return {
        dialog: false,
      }
    },
    methods: {
        emitOverlay() {
            this.$emit('hideOverlay');
        }
    },
}
</script>

<style>
.detailsWrapper {
    max-width: 100%
}
</style>