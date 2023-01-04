let a= 10;
var b=80;
const c =90;

function hello()
{
    var d = 432;
    var x= 433;
    function insideHello()
    {
        let x = 32;
        console.log('Insidehello() function x',x);
    }
    console.log('hello() function a',a);
    console.log('hello() function b',b);
    console.log('hello() function c' ,c);
    console.log('hello() function d',d);
    console.log('hello() function x',x);
}
console.log('In Global Execution context(GEC) x',x);
hello();
insideHello();
console.log('In Global Execution context(GEC) c' ,c);