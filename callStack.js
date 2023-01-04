console.log('Welcome to JavaScript World!!');

var a;
let b;

console.log("a",a,"b",b);

a=23;
b=34;

function first10NaturalNumber()
{
    var a = 1;
    console.log("Natural Numbers:");
    for(let start=1; start<=10;start++)
    {
        console.log(start);
    }
}

function first10WholeNumber()
{
    var a = 1;
    console.log("Whole Numbers:");
    for(let start=0; start<10;start++)
    {
        console.log(start);
    }
}

first10NaturalNumber();
first10WholeNumber();

