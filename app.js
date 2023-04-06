  //Question No 1 
  let num1 = +prompt("Enter Your 1st Number");
  let num2 = +prompt("Enter Your 2nd Number");

  if (num1>num2) {
      console.log("The Largest Number Is " + num1);
  }else if(num2>num1){
      console.log("The Largest Number Is "+ num2);
  }else{
      console.log("Please Different Number ");
  }

  //Question No 2

  let number = +prompt("Enter Your Number + or - ");
  if (number>=0) {
      console.log("The Sign Is +");
  }else{
      console.log("The Sign Is -");
  }
//Question NO 3
  let number1 = +prompt("Enter Your 1st Number");
  let number2 = +prompt("Enter Your 2nd Number");
  let number3 = +prompt("Enter Your 3rd Number");
  let number4 = +prompt("Enter Your 4th Number");
  let number5 = +prompt("Enter Your 5th Number");

  if (number1>number2 && number1>number3 && number1>number4 && number1>number5) {
      console.log("The Largest Number Is " + number1);
  }else if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
      console.log("The Largest Number Is "+ number2);

  }
  else if(number3>number1 && number3>number2 && number3>number4 && number3>number5){
    console.log("The Largest Number Is "+ number3);
  }
  else if(number4>number1 && number4>number2 && number4>number3 && number4>number5){
    console.log("The Largest Number Is "+ number4);
  }
  else if(number5>number1 && number5>number2 && number5>number3 && number5>number4){
    console.log("The Largest Number Is "+ number5);
  }
//Question NO 4:

for (let i=0; i<=15; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}


 // Question No 5

 
 let student = prompt("Enter Your Student Total Number ")

	

 if (student <= 60){
   console.log("Grade : F");      
   } 
 else if (student <= 70) {
         console.log("Grade : D"); 
           } 
 else if (student <= 80) 
      {
         console.log("Grade : C"); 
 } else if (student <= 90) {
         console.log("Grade : B"); 
 } else if (student <= 100) {
         console.log("Grade : A"); 
}

//Qusetion No 6:
for ( let i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

//Question No 7

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


  