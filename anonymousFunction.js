var greet = () => {
    console.log("Welcome to Hell World!");
    return 50 ;
}
console.log(greet());

function a(b)
{
    console.log(b());
    console.log("Inside function a");
}
a(greet);