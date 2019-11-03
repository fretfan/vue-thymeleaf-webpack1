import _ from 'lodash';
import Vue from 'vue';
import Hello from '../../spa-frontend/src/components/Hello.vue';
import './css/legacy-style.css';
import './css/legacy-scss-styles.scss';
import * as legacy1 from './js-includes/legacy1.js';
import * as legacy2 from './js-includes/legacy2.js';
import { runLib1 } from './js-includes/libs/custom-lib1';
import { runLib2 } from './js-includes/libs/custom-lib2';
import * as $ from 'jquery';

const vueApp = new Vue({
  template: `<div>
             <hello count="123" 
             :numberOfClicks="numberOfClicks"
             />
             Some more text
         </div>`,
  el: '#vue-app',
  data: {
    numberOfClicks: 0,
  },
  mounted() {
    console.log('vueApp mounted');
  },
  components: { Hello },
});

export function setHelloMsg() {
  const msg = document.getElementById('one-msg');
  const msg2 = _.join(['a', 'b', 'c'], '~');
  msg.innerText = 'One msg: ' + msg2;
}

export function incrementClick() {
  console.log('clicked');
  vueApp.numberOfClicks++;
}
console.log(`Jquery .some-style text: ${$('.some-style').text()}`);
legacy1.do1();
legacy2.do2();
runLib1();
runLib2();
console.log('------given environment values-------');
// eslint-disable-next-line no-undef
console.log(`CLI_VALUE${CLI_VALUE}`);
