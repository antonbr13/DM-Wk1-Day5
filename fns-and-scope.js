//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here (DONE!!!!)
function isTyler(name) {
    if (name === "Tyler") {
      return true;
    }
    return false;
}






//Next problem (DONE!!!!)
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
  var name = prompt("What is your name?");
  return name;
}


  //Code Here





//Next Problem
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  
  function welcome() {
    var blah = getName();
    return('Welcome ' + blah);
  }







//Next problem
//What is the difference between arguments and parameters?

  //Answer Here
   
  //     The parameters are the aliases for the values that will be passed to the function declarations. The arguments are the actual values when invoking the function.

  //     function foo( a, b, c ) {}; // a, b, and c are the parameters

  //     foo( 1, 2, 3 ); // 1, 2, and 3 are the arguments
  
  // ++

  //     Parameters (if any) define the method signature. Arguments are values passed into a function.
      
  //     void function(int param1, string param2) //defines the types the function must receive.
      
  //     function(1, "Hello World") 1 and "Hello World" are passed as arguments. The parameter receives (if you like) the argument.




//Next problem
//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here


// null, false, 0(zero), ""(empty string), undefined, Nan

// function testTrue(test){
//    if(test){
//      console.log(test + " is true");
//    }
//    else{
//      console.log(test + " is false");
//    }
// }
// testTrue(NaN);







//Next Problem
//Create a function called myName that returns your name

  //Code Here
  
  function myName() {
    return "anton bredl";
  }

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
 
 alert(newMyName());





//Next problem
//Create a function called outerFn which returns an anonymous function which returns your name.
//Code Here

function outerFn() {
    return function() {
    return "jay";
  }
}



//Now save the result of invoking outerFn into a variable called innerFn.
  //Code Here
  var innerFn = outerFn();
  
  

//Now invoke innerFn.

innverFn();