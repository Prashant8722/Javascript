//   //Example 2
//   function a() {
//     var x=100;
//     function b()
//     {
//         return x;
//     }
//     var x= 200;
//     return b;
//   }
//   var m = a();
//   console.log(m());

// //   Output:200

//Example 3
// function a()
// {
//     var x =100;
//     function b()
//     {
//         var y=200;
//         function c()
//         {
//             console.log(x,y);        
//         }
//         c();
//     }
//     b();
// }
// a();

// // Output:- 100 200  

// Example 4
function datahiding() {
    let xm = 1;
    function multiply()
    {
        console.log("value of xm inside multiply fun  before modification :=",xm);
        xm=xm*2;
        console.log("value of xm inside multiply fun after mofification :=",xm);
        return xm;
    } 
    return multiply;
}
var multiple = datahiding();
// console.log(multiple);
console.log("Value of xm inside multiply fun =",multiple());




