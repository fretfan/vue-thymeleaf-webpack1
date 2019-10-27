<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hr />
    <h2 style="color:red;">Webpack tests</h2>
    <div>
      Icon:
      <img alt="test icon" src="@/assets/pointer-icon.svg" height="30px" width="30px" />
    </div>
    <div>Message from backed: {{ theMessage }}</div>
    <div>Env variable VUE_APP_RANDOM_STRING: {{ randomString }}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
const axios2 = axios.create({
  baseURL: 'http://localhost:8080'
});

export default {
  name: 'app',
  data() {
    return {
      theMessage: 'No response',
      randomString: process.env.VUE_APP_RANDOM_STRING
    };
  },
  created() {
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
};
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
