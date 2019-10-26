// import $ from 'jquery';
import './css/legacy-style.css';


export function setHelloMsg() {
    var msg = document.getElementById('two-msg');
    msg.innerText = 'Two msg';
    var elem = $("#two-msg2"); //using jquery from globally included bundle
    elem.text('Set with jquery');
}

export function someFun() {
    console.log('called someFun');
}
