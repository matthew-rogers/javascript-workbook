//Data Types

const name = "Matt";
const userAge = 32;
const dividedBy = (num1, num2) => {return num1 / num2};

//Conditionals
const getSum = (num1, num2) => {return num1 + num2};

function bothAreTrue(a, b){
    if (a === true && b === true) {
        return alert("Both are true");
    } else {
        return alert("One or Both are untrue");
    }
}
//Can't get to work
function threeStrings (a, b, c) {
    if ((typeof a === String) && (typeof b === String) && (typeof c === String)) {
        return alert("All are strings!");
    } else {
        return alert("One or more are not strings!");
    }
    
}

var month;
switch (new Date().getMonth()) {
    case 0:
        month = "January";
        break;

    case 1:
        month = "February";
        break;
        
    case 2:
        month = "March";
        break;
        
    case 3:
        month = "April";
        break;
    
    case 4:
        month = "May";
        break;
    
    case 5:
        month = "June";
        break;
        
    case 6:
        month = "July";
        break;
    
    case 7:
        month = "August";
        break;
    
    case 8:
        month = "September";
        break;
        
    case 9:
        month = "October";
        break;
        
    case 10:
        month = "November";
        break;
        
    case 11:
        month = "December";
        break;
}

///DATA TYPES WEEK 1///
//1.

const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();

console.log('date:', n);
console.log('time:',time);

//2. Number to String

var myNum = 32;
var myNumString = myNum.toString();
console.log(myNumString);

//3. String to Number

const myText = "55";
const parseMyText = parseInt(myText);
console.log(parseMyText);

//4. Write a JavaScript program that takes in different datatypes and prints out whether they are

function findTypeOf(a){
    return typeof(a);
}

//5. Write a program that adds two numbers
simpleAddition = (a, b) => {return a + b};


//6. Run if both things are true
alertIfBothAreTrue = (a, b) => {if (a, b === true){ 
    alert("Both are true!");
  } else {
      return alert("Both are not true!");
  }
    
}

//7. Run if 1 of 2 things is true
alertIfOneIsTrue = (a, b) => {if (a === true || b === true){ 
    alert("one is true!");
  } else {
      return alert("Something went wrong!");
  }
    
}

//8. Run if both things are untrue
alertIfBothAreUntrue = (a, b) => {if (a !== true && b !== true){ 
    alert("Both are untrue!");
  } else {
      return alert("Both are not true!");
  }
    
}