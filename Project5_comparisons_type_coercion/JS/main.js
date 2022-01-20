function NaNN(){
   document.getElementById("notAnum").innerHTML= 0/0;      //NaN
}

function isNaNa(){
   document.getElementById("stringN").innerHTML= isNaN("This is  a  string");   //true
}

function Fals(){
   document.getElementById("Numb").innerHTML= isNaN("0234");   //false
}

function Infit_plus(){
   document.getElementById("positIn").innerHTML= (2E312);  //Infinity
}

function Infit_minus(){
   document.getElementById("negatIn").innerHTML= (-2E312); // Negative Infinity

}

function trUe(){
   document.getElementById("Bool1").innerHTML= (12>10);      // Boolean -true
}
 
function fAls(){
   document.getElementById("Bool2").innerHTML= (12<10);         //Boolean -false
}

console.log(10+10);     // The result can be seen in console 


function Coerc_ion(){
   document.getElementById("Coercion").innerHTML= ("16" + 4 );    // Coercion
}

console.log(2>7);         //The result can be seen in console 


function Real(){
   document.getElementById("DoubleEqual1").innerHTML= (2==2 );  //true
}

function  NotReal(){
   document.getElementById("DoubleEqual2").innerHTML= (2==4);   // false
}

var A = 10;
var B = 10;
document.write(A===B);  // Tripple equal sign : data type and value are same .

document.write("<br>");

var A = "10";
var B = 12;
document.write(A===B);   // Tripple equal sign : data type and value are not same .

document.write("<br>");

var A = 7;
var B = "7";              //// Tripple equal sign : different data type and same value  .
document.write(A===B);

document.write("<br>");

var A = 7;
var B = 5;              //// Tripple equal sign : same data type and different value  .
document.write(A===B);

document.write("<br>");
document.write("<br>");

document.write(10>2 && 2<5);

document.write("<br>");
                                     //AND&& and OR|| operator
document.write(10<3 && 10>3);

document.write("<br>");

document.write(10 > 2 || 5<10);

document.write("<br>");

document.write(2<1 || 4>6);


function Not_oper(){
   document.getElementById("NotOp").innerHTML=!(10>20);  //NOT operator showing true
}

function Not_oper2(){
   document.getElementById("NotOp2").innerHTML=!(10<20);      //NOT operator showing false//  
}