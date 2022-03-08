<template>
  <v-container>
    <v-app id="inspire">
      
      <v-app-bar color="white" flat>
        <!-- <img alt="Vue logo" src="@/assets/finalLogo.png"> -->
        <v-tabs centered class="ml-n9" color="grey darken-1">
          <v-tab v-for="link in links" :key="link">
            {{ link }}
          </v-tab>
        </v-tabs>
      </v-app-bar>

      <v-main  class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="12" sm="2">
              <v-sheet rounded="lg" min-height="268">
                  <v-card flat>
                    <v-card-title text-center>
                      Hours
                    </v-card-title>
                    <Hours />
                  </v-card>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="8">
              <v-sheet min-height="70vh" rounded="lg">
                <v-card flat centered>
                  <v-card-title text-center>Wecome To Perry's Plate!</v-card-title>
                  <v-card-subtitle>Since 2016</v-card-subtitle>
                </v-card>
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="2">
              <v-sheet rounded="lg" min-height="268">
              </v-sheet>
            </v-col>

          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-container>
</template>


<script>
import Hours from './subpages/hours.vue'
export default {
  name: 'MainPage',
  components: {
    Hours
  },
  props: {
    welcome: String,
    year: String
  },
  data () {
    return {
      imgIsLoaded: false,
      links: [
        'Home',
        'Menu',
        'Order Online',
        'About Us',
        'Apply',
      ]
    }
  },
  methods: {
    imgLoadedMethod () {
      this.imgIsLoaded = true
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>