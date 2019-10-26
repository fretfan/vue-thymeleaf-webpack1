import _ from 'lodash';
import Vue from 'vue';
import Hello from '../../spa-frontend/src/components/Hello.vue';
import './css/legacy-style.css';
import './css/legacy-scss-styles.scss';

const vueApp = new Vue({
    template:
        `<div>
             <hello count="123" 
             :numberOfClicks="numberOfClicks"
             />
             Some more text
         </div>`,
    el: '#vue-app',
    data: {
        numberOfClicks: 0
    },
    mounted() {
        console.log('vueApp mounted');
    },
    components: {Hello}
});

export function setHelloMsg() {
    var msg = document.getElementById('one-msg');
    var msg2 = _.join(['a', 'b', 'c'], '~');
    msg.innerText = 'One msg: ' + msg2;
}

export function incrementClick() {
    console.log("clicked");
    vueApp.numberOfClicks++;
}