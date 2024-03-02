### HTML

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Vue.js in Docker. Click to call Coinbase API."/>
  <button @click="syncFetchBTCPrice">{{ "Clicked: " + called + " times"}}</button>
  
   <div>
    <h1>Bitcoin Price: {{ btcPrice }}</h1>
  </div>
  
</template>


### LOGIC

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      called: 0,
      btcPrice: 0
    }
  },
  mounted() {
    this.syncFetchBTCPrice();
  },
  methods: {

    syncFetchBTCPrice() {
      this.called++;
      fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy', {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          response.json().then(json => {
            console.log(json);
            this.btcPrice = json.data.amount;
          });
        }
      })
    }
  }
}
</script>


### STYLES

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #515151;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
