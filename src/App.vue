<template>
  <div color="grey" id="app">
    <v-card id="address-card" flat>
        <v-card-text id="address-card-text">89 Main St. Andover, MA | <a href="tel:">(978) 409-1814</a></v-card-text>
    </v-card>
    <MainPage :welcome=propA :year=propB />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: 
  {
    MainPage
  },
  data () {
    return {
      propA: "Welcome to Perry's Plate!",
      propB: "Since 2016"

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#address-card {
  height: 50px;
  border-radius: 0px;
  border-bottom: 2px solid #3b5998;
}

#address-card-text {
  color: #3b5998;
  font-size: 20px;
}

a {
  text-decoration: none;
  color: #3b5998;

}
</style>
