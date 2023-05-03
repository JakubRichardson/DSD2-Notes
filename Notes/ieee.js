//IEEE-754 convertor

var bit_32 = 0xFFFFFFFF;
var bit_23 = 0x7FFFFF;
var bit_8  = 0xFF;

function print(){
    var ieee = document.getElementById("hexieee").value;
    if (ieee[1] != "x"){
        ieee = "0x" + ieee;
    }
    ieee &= bit_32;

    var sign = (ieee >> 31) & 0x1;
    var exponent = ((ieee >> 23) & bit_8) - 0x7F;
    var significand = ieee & bit_23;
    var sigval = 1;
    var output;

    for(var i = 0; i < 23; ++i){
        var exp = -23 + i;
        sigval += ((significand >> i)&0x1) * (2**exp);
    }

    output = (1 - 2*sign)*(2**exponent)*sigval;
    document.getElementById("sign").innerHTML = "Sign = " + sign
    document.getElementById("exp").innerHTML = "Exponent = "+ exponent; 
    document.getElementById("signif").innerHTML = "Significand = " + significand; 
    document.getElementById("sigval").innerHTML = "Value of the Significand = "+ sigval; 
    document.getElementById("finalval").innerHTML = "Value of IEEE 754 = "+output;
}