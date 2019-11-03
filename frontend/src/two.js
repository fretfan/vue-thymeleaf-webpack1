// import $ from 'jquery';
import './css/legacy-style.css';


export function setHelloMsg() {
    var msg = document.getElementById('two-msg');
    msg.innerText = 'Two msg';
    // eslint-disable-next-line no-undef
    var elem = $("#two-msg2"); //using jquery from bundle.js included in head
    elem.text('Set with jquery');
}

export function someFun() {
    console.log('called someFun');
}
// eslint-disable-next-line no-undef
console.log(`Printing env variables: TWO=${TWO}, RANDOM_STRING=${RANDOM_STRING}`)