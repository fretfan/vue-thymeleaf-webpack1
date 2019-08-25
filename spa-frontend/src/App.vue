<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
        Message from backed: {{theMessage}}
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';
const axios2 = axios.create({
  baseURL: 'http://localhost:8080'
});

export default {
  name: 'app',
  data() {
    return {
        theMessage: 'XX'
    }
  },
  created(){
    this.getMessage();
  },
   methods: {
          getMessage() {
              axios2.get('/test-message').then(resp => {
                  this.theMessage = resp.data;
              });
          }
      },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
