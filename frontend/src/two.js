export function setHelloMsg() {
    var msg = document.getElementById('two-msg');
    msg.innerText = 'Two msg'
}

export function someFun() {
    console.log('called someFun');
}

setTimeout(() => someFun(), 2000);