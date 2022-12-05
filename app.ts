// Question One //
const fun = function(a :number, b :number) : number{

    return (a + b);
}
console.log(fun(5,6));

// Question two //
interface Param{

    first : number;
    second : number;
}

const fun1 = function(params : Param){

      return params.first + " " +  params.second;
        
}
console.log(fun1({first:20, second:40}));

// Question three //
const fun2 = function(user : {firstName : string, lastName? : string}){

    return user.firstName;

}
console.log(fun2({firstName:"Ali"}));

// Question four //
const fun3 = function(one : string, two? : string){

    return one;

}
console.log(fun3("Razan"));

// Question five //
interface User{

    id : number;
    firstName : string;
    lastName : string;
    isAdmin : boolean
}
const user1 : User = {

    id : 1,
    firstName : "Razan",
    lastName : "Barham",
    isAdmin : false

}
const fun4 = function(user : User){

    return user.id

}
console.log(fun4(user1));

// Question 6 //
type Role = "User" | "Admin" | "SuperUser";
interface User1{

    id : number;
    firstName : string;
    lastName : string;
    isAdmin : Role
}

const user2 : User1 = {

    id : 5,
    firstName : "Omar",
    lastName : "Khaled",
    isAdmin : "Admin"
}

const fun5 = function(user : User1){

    return user.isAdmin;

}
console.log(fun5(user2));

// Question 7 //
interface Post{

    id : number;
    title : string;
    body : string;
}

type Role1 = "User" | "Admin" | "SuperUser";

interface User2{

    id : number;
    firstName : string;
    lastName : string;
    isAdmin : Role1;
    posts : Post[];
}

const p1 : User2 ={

    id : 2,
    firstName : "Adam",
    lastName : "Ahmad",
    isAdmin : "SuperUser",
    posts : [{

        id : 5,
        title : "My Book",
        body : "Working on my Book"
    }]
}

// Question 8 //
type Role2 = "User" | "Admin" | "SuperUser";

interface User3{

    id : number;
    firstName : string;
    lastName : string;
    isAdmin : Role2;
    posts : Post[];
}

const make = function() : User3 {

    return {

        id : 1,
        firstName : "Razan",
        lastName : "Barham",
        isAdmin : "User",
        posts : [{id : 5, title : "Book One",body : "Working on my first book"}]

    }
}

// Question 9 //
interface Luke {
    
    activity : string;
    type : string;
    participants : number;
    price : number;
    link : string;
    key : number;
    accessibility : number
}

const fun6  = function(){

fetch('https://www.boredapi.com/api/activity').then(function(response){

    
    return response.json();   


}).then(function(data){

   console.log(data as Luke);

})

}
fun6();

// Question 10 // 
const s1 = function <param1>(set : param1 ) : param1{

    console.log(s1);
    return set;

}
s1("Razan Barham");
s1(["razan","huda","muna"]);

// Question 11 //
interface G1<K,V>{

    id : K|V;
    name : K|V;
    age : K|V;
    major : K|V
}
const ob2 : G1<string,number | string[]|number[] | {} > = {

    id : 1,
    name : "Razan",
    age : 24,
    major : "CS"

}

// Question 12 //

// Question 13 //
function checkStatus(status : string){
   
    let request = new XMLHttpRequest();

    request.open("GET",status);
   
    request.responseType = "json";
    
    request.send();

    request.onload  = function(){
   if(request.status >= 200 && request.status < 300){

    alert("This Request has been done");

   }
    else{
        alert("Error Happened");
    }  
}
}
checkStatus("https://www.boredapi.com/api/activity");

// Question 14 //
interface C1{

    name : string;
    age : number;
    major : string;

    hello(p : string) : void;
    calc(val : number) : number;

}

function echo<param extends C1>(item : param) : param  {

    console.log(item.name);
    item.hello("Hello World");
    item.calc(3);
    return item;

}
echo({

    name : "John Doe",
    age : 30,
    major : "English",

    hello(p : string){

        console.log(p);
    },

    calc(num : number) : number{

        console.log(num * num);
        return num;
    }

})
   
// Question 15 //
interface One{

    id : number;
    firstName : string;
    lastName : string;
    post : Two;
}

interface Two {

    id : number;
    title : string;
    body : string
}

const CC1 : One = {

    id : 1,
    firstName : "Razan",
    lastName : "Barham",
    post : {

        id : 200,
        title : "Book One",
        body : "Workin on my first book"
    }

}

// Question 16 //
interface ABC<val>{

    id : val;
    firstName : val;
    lastName : val;
}

type element = ABC<string|number>;
console.log("Razan");
console.log("Barham");
















