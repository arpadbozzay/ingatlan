<template>
    <v-app id="main_app">
      <NavigationDrawer class="text-left"/>
      <v-container fluid class="ma-0 grey lighten-5">
        <v-row>
          <v-col xs="0" sm="0" md="4" lg="4" xl="4" class="hidden-md-and-down">
              <v-list dense class="text-left">
                <router-link to="/">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon  color="indigo" small>mdi-format-list-bulleted</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title  class="indigo--text text-h6">Lista</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
                <router-link to="/favourites">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo" small>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="indigo--text text-h6">Favourites<br></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </router-link>
              </v-list>
          </v-col>
          <v-col xs="12" sm="12" md="8" lg="8" xl="8">
            <v-main>
              <v-container class="main-container">
                <router-view/>
              </v-container>
            </v-main>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>

<script>

import NavigationDrawer from './components/NavigationDrawer';

export default {
  name: 'App',
  components: {
    NavigationDrawer
  },
   data: () => ({
      drawer: false
    })
}
</script>

<style>
#main_app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.navigation {
  display: flex;
  flex-direction: column;
}
</style>
