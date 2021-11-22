<template>
    <div>
      <v-navigation-drawer
          absolute
          v-model="sideNav"
          temporary
      >
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
      </v-navigation-drawer>
      <v-app-bar-nav-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
    </div>
</template>

<script>
export default {
     data: () => ({
       sideNav: false
    }),

}
</script>

<style>

</style>