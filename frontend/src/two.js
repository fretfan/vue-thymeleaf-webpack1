import $ from 'jquery';

export function setHelloMsg() {
    var msg = document.getElementById('two-msg');
    msg.innerText = 'Two msg';
    var elem = $("#two-msg2");
    elem.text('Set with jquery');
}

export function someFun() {
    console.log('called someFun');
}

setTimeout(() => someFun(), 2000);