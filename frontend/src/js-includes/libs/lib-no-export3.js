console.log('init lib-no-export3.js')
// comments will be removed by uglify
// eslint-disable-next-line no-unused-vars
function runLibNoExport3() {
    console.log('runLibNoExport3');
}
// eslint-disable-next-line no-unused-vars
function someDummy() { // to test uglify
    var aVariable = 'part1';
    var aVariable2 = 'part2';
    var result = aVariable + aVariable2;
    console.log(result);
}
