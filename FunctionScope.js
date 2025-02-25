//Make a function and create another variable with var inside function(function scope)
var sapid=45945  //global scope


function fscope() {
    var name="Farwa"//function scope
    console.log(name);

}
fscope();
console.log(sapid);
//console.log(name); //Giving Error cause its unaccessible outside the function