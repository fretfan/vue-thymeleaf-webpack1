import _ from 'lodash';
import Vue from 'vue';
import Hello from './Hello.vue';
import './css/legacy-style.css';
import './css/legacy-scss-styles.scss';

var app = new Vue({
  el: '#vue-app',
  mounted() {
    console.log('hello');
  },
  components: {Hello}
});

export function setHelloMsg() {
    var msg = document.getElementById('one-msg');
    var msg2 = _.join(['a', 'b', 'c'], '~');
    msg.innerText = 'One msg: ' + msg2;
}