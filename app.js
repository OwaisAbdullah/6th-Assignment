// Assignment # 21-25
//     JAVASCRIPT

// Task 1
// var firstname = prompt("Enter First Name");
// var lastname = prompt("Enter Last Name");
// var fullname = alert (firstname + " " + lastname);


// Task 2
// var fav = prompt("What is your favourite Mobile :");
// var measure = alert (fav.length);


// Task 3 
// var text = "Pakistani";
// var len = text.indexOf("n");
// document.write("The index number of n is : " + len);
// document.write("<br>");


// Task 4 
// var text1 = "Hello World!";
// var len1 = text1.lastIndexOf("l");
// document.write("The last index number of l is : " + len1);
// document.write("<br>");


// Task 5
// var text2 = "Pakistani";
// var len2 = text2.charAt(3);
// document.write("The Character at 3 is : " + len2);
// document.write("<br>");


// Task 6
// var firstname = prompt("Enter First Name");
// var lastname = prompt("Enter Last Name");
// var fullname = firstname.concat(" " + lastname);
// alert (fullname);


// Task 7
// var city = "Hyderabad";
// document.write("City : " + city);
// document.write("<br>");
// var change = city.replace("Hyderabad" , "Islamabad");
// document.write("After Replacing : " + change);
// document.write("<br>");


// Task 8
// var message = "“Ali and Sami are best friends. They play cricket and football together.”";
// var changing = message.replace(/and/g , "&");
// document.write(changing);
// document.write("<br>");


// Task 9 
// var num = "472";
// document.write("Value : " + num);
// document.write("<br>");
// document.write("Type : String");
// document.write("<br>");
// var con = parseInt(num);
// document.write("value : " + con);
// document.write("<br>");
// document.write("Type : Number");


// Task 10
// var changingcase = prompt("Enter which you want");
// var uppercase = changingcase.toUpperCase();
// document.write("User Input: " + changingcase);
// document.write("<br>");
// document.write("Upper Case: " + uppercase);
// document.write("<br>");


// Task 11
// var inp = prompt("Enter which you want");
// var title = inp.charAt(0).toUpperCase() + inp.slice(1);
// document.write("User Input: " + inp);
// document.write("<br>");
// document.write("User Input: " + title);
// document.write("<br>");


// Task 12
// var val = 45.46;
// var stri = val.toString();
// document.write(stri);


// Task 13
// var username = prompt("Enter you name");
// var valid = prompt("Please Enter Valid user name! [@ . , !] ");


// Task 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("Welcome to Owais's Bakery. What do you want to order sir/ma'am?");
// var c =  b.indexOf(a)
// for (var i = 0; i <a.length; ++) {
//         if(a[i] === b){           
//             alert("Your Item is available at Index " + c + " in our bakery.");
//             break;
//         }
//         else{
//             alert("We are sorry. " + b + " is not available in our bakery.");
//             break;
//         }
// }


// Task 15
// var pass = prompt("Enter Password : abc123 : at least 6 characters")
// var strin = "owais"
// var numb = 123
// var plus = strin + numb
// if (pass == plus){
//     alert("Successfull")   
//     // break;
// }
// else{
//     prompt("Please Enter a valid password")
//     // break;
// }


// Task 16
// var uni = "University of Karachi";
// var arruni = uni.split() + "" ;
// for (let j = 0; j< arruni.length; j++) {
//     document.write(arruni[j] + "<br>");
// }
// document.write("<br>");



// Task 17
// var usrinp = prompt("Enter Your Country Name")
// var lastchar = usrinp.charAt(usrinp.length-1)  
// document.write("User Input : " + usrinp)
// document.write("<br>");
// document.write("Last Character : " + lastchar)
// document.write("<br>");


// Task 18
// var sen = "The quick brown fox jumps over the lazy dog."
// var spl = sen.split(" ");
// var count = 0;
// document.write("The quick brown fox jumps over the lazy dog. There are" + count + "occurrences of word ")
// Sir I have tried so many times but I can not count this 




// Assignment # 26-30
//     JAVASCRIPT


// Task 1 
// var number = prompt("Enter Positive Number");
// document.write("Your Entered This Number : " + number);
// document.write("<br>");
// var round = Math.round(number);
// document.write("Round off Value is : " + round);
// document.write("<br>");
// var floor = Math.floor(number);
// document.write("Floor Value is : " + floor);
// document.write("<br>");
// var ceil = Math.ceil(number);
// document.write("Ceil Value is : " + ceil);
// document.write("<br>");


// Task 2 
// var number1 = prompt("Enter Negative Number");
// document.write("Your Entered This Number : " + number1);
// document.write("<br>");
// var round1 = Math.round(number1);
// document.write("Round off Value is : " + round1);
// document.write("<br>");
// var floor1 = Math.floor(number1);
// document.write("Floor Value is : " + floor1);
// document.write("<br>");
// var ceil1 = Math.ceil(number1);
// document.write("Ceil Value is : " + ceil1);
// document.write("<br>");


// Task 3
// var x = 7;
// var y =-8
// var z = -23.45
// document.write("absolute value of " + x + " is " +Math.abs(x));
// document.write("<br>");
// document.write("absolute value of "+ y + " is " +Math.abs(y));
// document.write("<br>");
// document.write("absolute value of " + z + " is " +Math.abs(z));
// document.write("<br>");


// Task 4
// var randnum = Math.random() *6 +1;
// var floor2 = Math.floor(randnum);
// document.write("Random Dice Value is = " + floor2);
// document.write("<br>");
// var randnum1 = Math.random() *6 +1;
// var floor3 = Math.floor(randnum1);
// document.write("Random Dice Value is = " + floor3);
// document.write("<br>");


// Task 5
// var captan1 = prompt("Enter 1st team's Captan Name ");
// var captan2 = prompt("Enter 2nd team's Captan Name ");
// var coin = Math.random() *2 + 1;
// var flo = Math.floor(coin);
// if(flo === 1){
//     document.write("Head = " + captan1 + " Won The Toss.");
//     document.write("<br>");
// }
// else{
//     document.write("Tails = " + captan2 + " Won The Toss.");
//     document.write("<br>");
// }


// Task 6
// var pro = Math.random() *100 + 1;
// var floo = Math.floor(pro);
// document.write("Random number between 1 and 100 : " + floo);
// document.write("<br>");

// Task 7 
// var weight = prompt("What is your Weight?")
// document.write("The Weight of user is " + weight + " Kilograms");
// document.write("<br>");

// Task 8
// var secret = Math.random() *10 + 1;
// var flooo = Math.floor(secret);
// var scrtnum = prompt("Enter a number between 1 to 10")
// if(flooo === 1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10){
//     document.write("Congratulate");
//     document.write("<br>");
// }
// else{
//     document.write("You entered Wrong number");
//     document.write("<br>");
// }




// Assignment # 31-34
//     JAVASCRIPT


// Task 1 
// var now = new Date();
// document.write(now);
// document.write("<br>");


// Task 2
// var monthsname = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var d = new Date();
// var month = d.getMonth(); 
// var nameofmonth = monthsname[month]
// document.write("Current Month is " + nameofmonth);
// document.write("<br>");


// Task 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var t = new Date();
// var day = t.getDay();
// var namedy = dayNames[day];
// document.write("Today is " + namedy);
// document.write("<br>");


// Task 4 
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var t = new Date();
// var day = t.getDay();
// var namedy = dayNames[day];
// document.write("Today is " + namedy);
// document.write("<br>");
// if (namedy === [0] && [6]){
//     alert("It's Fun Day " + namedy);
// }
// else{
//     alert("Working Day " + namedy);
// }


// Task 6
// var dd = new Date();
// var milli = dd.getTime();
// var min = dd.getMinutes();
// document.write("Current Date : " + dd)
// document.write("<br>");
// document.write("Elapsed Milliseconds Since January 1, 1970 : " + milli)
// document.write("<br>");
// document.write("Elapsed Minutes Since January 1, 1970 : " + min)
// document.write("<br>");


// Task 7
// var ddd = new Date();
// var hrs = ddd.getHours();
// document.write( hrs)
// document.write("<br>");
// if(hrs === 12){
//     alert("It's AM " + hrs + " O' Clock");
// }
// else{
//     alert("It's PM " + hrs + " O' Clock")
// }



// Task 14
// document.write("<h1>K-Electric Bill</h1>")
// document.write("<br>");
// document.write("<br>");
// var customername = prompt("Enter Customer Name")  
// var month12 = prompt("Enter Month")
// var units = prompt("Enter Units")
// var unitcharges = prompt("Enter unit Charges")
// document.write("Customer Name : " + customername);
// document.write("<br>");
// document.write("Month : " + month12);
// document.write("<br>");
// document.write("Units : " + units);
// document.write("<br>");
// document.write("Charges Per Unit : " + unitcharges);
// document.write("<br>");
// document.write("<br>");
// var netamount = units * unitcharges
// document.write("Net Amount Payable (within Due Date) = " + netamount);
// document.write("<br>");
// var lateamountcharges = 350;
// var  grossamount = netamount + lateamountcharges
// document.write("Gross Amount Payable (After Due Date) = " + grossamount);
// document.write("<br>");




// Assignment # 31-34
//     JAVASCRIPT


// Task 1
// function  currdate(){
//     var newdte = new Date();
//     document.write(newdte); 
// } 
// currdate();


// Task 2
// function naming(){
//     var frstnme = prompt("Enter First Name");
//     var lstnme = prompt("Enter Last Name");
//     var fulnme = frstnme + " " + lstnme;
//     alert(fulnme);
// }
// naming();

// Task 3 
// function sum(){
//     var val1 = prompt("Enter First Number");
//     var val2 = prompt("Enter second Number");
//     var adding = +val1 + +val2;
//     alert(adding);
// }
// sum();


