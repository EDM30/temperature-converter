function convert() {
    var temp = document.getElementById('temp').value;
    var unit = document.getElementById('unit').value;
    var result;

    if (unit == 'C') {
        result = temp * 9/5 + 32;
        document.getElementById('result').innerHTML = temp + ' Degress Celcius is ' + result + ' Degrees Farenheit';
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById('result').innerHTML = temp + ' Degrees Farenheit is ' + result + ' Degrees Celcius';
    }
}