// JavaScript hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
var c1 = 23;    //global var
// let e1;
console.log("e1=",e1,"c1=",c1);
//console.log("e2=",e2);
//console.log("l3=",l3);
var e1 = 24; 
const e2 = 34;      //script var
let l3 = 323;       //script var

function initialize()
{   
    var insnotAccessibleOutside = 12;
    let k = 20;         //local variable to function
    console.log('height of Student',k,e2,l3);
}

initialize();

initialize2CalledbeforeDeclaration();

{
    var ins=99;
}
console.log('ins=',ins);
// console.log('insnotAccessibleOutside=',insnotAccessibleOutside);

function initialize2CalledbeforeDeclaration()
{
    let k1 = 20;         //local var to function
    console.log('height of Student inside initialize2CalledbeforeDeclaration() ',k1,c1,ins);
}

