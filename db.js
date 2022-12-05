/*interface Posts{
   
    id : number;
    title : string;
    body : string;
    isPublic : boolean;
}


const makePost = function() : Posts{

    return {

        id : 3,
        title : "My Hope",
        body : "I am writter posts, thank you",
        isPublic : true,
    }
}

enum Role{

    User,
    Admin,
    SuperAdmin

}

type Role1 = "User" | "Admin" | "SuperAdmi" ;

type Fruit = "Apple" | "Banana" | "Orange";

const f1 : Fruit = "Apple";// must be one of those up

interface User{

    id : number;
    isAdmin :Role1;
    age: number;
    firstName : string;
    lastName : string;
    posts : Posts[];
}
const makeUser = function() : User{ // this function return object so i must make the object match interface

return {

    id:1,
    isAdmin : "Admin",
    age : 30,
    firstName : "Ali",
    lastName : "Omar",
    posts : [{ id:1, title:"greet post", body :"jggftdrfcgvh",isPublic:false}]
}
}
console.log(makeUser);

console.log("welcome");

// Generics //
function returnNumber<param>(val : param) : param{

    return val;

}
console.log(returnNumber(100));
console.log(returnNumber(["razan",24,"cs"]));



function returnString<param>(val : param) : param{

    return val;
}
console.log(returnString("Razan"));
console.log(returnString({num:1,name:"razan",major:"cs",age:24}));



function returnBoolean<param>(val : param) : param{

    return val;
}
console.log(returnBoolean(true));
console.log(returnBoolean("Hello World"));

function testType<param1>(val : param1) : param1{

    return val;
}
console.log(testType(100));
console.log(testType({id:1,title:"Hello World",major:"CS"}));

class ABC<param>{

    constructor(public name : param){}

    show(mes : param){

        console.log("This message is say " , mes);

    }
}
const A = new ABC("Razan");
A.show("Hello World");

const B = new ABC< string | number>(100);
const C = new ABC<{} | []>([1,"2",3,true]);
C.show({id:1,name:"razan",major:"cs"});

interface Book{

    itemType : string;
    title : string;
    isbn : number;

}

interface Game{
itemType : string;
title : string;
style : string;
price : number

}

class Collection<T>{

    public data : T[] = [];

    add(item : T) : void{

        this.data.push(item);
    }

}

let item1 = new Collection<Book>();
item1.add({itemType: "Book",title:"Hello",isbn:15550});

let item2 = new Collection<Book>();
item2.add({itemType:"Book",title:"Hi",isbn:12345});
console.log(item1);
console.log(item2); */
/*function getArray<param>(arr : Array<param>) : Array<param>{

    console.log(arr.length);
    return arr;
}
console.log(getArray(["razan","muna","huda"]));
let sort1 = ["razan","ali","huda","muna"];
console.log(getArray(sort1.sort()));

function get<A,B>(arr1 : Array<A> , arr2 : Array<B>) : Array<A> | Array<B>{

    console.log(arr1);
    console.log(arr2)
    return arr1;

}
get(["Razan","CS","Front-End"],[10,20,30]);

const s1 : Array<string | number> = ['A','B','C'];

class Genaric<key,value>{
    
    k : key;
    v : value;

    constructor(k:key , v : value){

        this.k = k;
        this.v = v;
        console.log(k,v);

    }

}
const obj1 = new Genaric("age",24);
const obj2 = new Genaric("name","Razan");


interface Luke1 <param>{

    data : param;
    status : number

}

function getData<Luke1>(){

    fetch(`https://www.boredapi.com/api/activity`)
    .then(function(response){

        return response.json();
    
    }).catch(function(reject){

        reject("Some Error");

    })
    .then(function(data){
       
        console.log(<Luke1>data);
    }).catch(function(reject){

        alert("Error! Try again");
    })
}
getData();

interface TypeObj<param>{

    id : param;
    name : param;
    age : param;
    color : param;
    key : param;

}
let obj3 : TypeObj<string | number> = {

id : 1,
name : "Razan",
age : 24,
color : "Pink",
key : 100

}

interface Pokemon{

    name : string;
    pokemonType : string;
    pokemonId : number;
}


let pokemon : Array<string | Pokemon> = ["Bulbasaur","Charmander","Squilte"];
pokemon = [{

    name : "Bulbasaur",
    pokemonType : "Pokemon",
    pokemonId : 200

}]

function logPokemon<param>(pokemon : param ) : param{

    return pokemon;

}
console.log(["Bulbasaur","Charmander","Squilte"]);
console.log("Razan Barham");
console.log(100);
console.log({name:"Charmander",pokemonType:"Doll",pokemonId:15500});

type T = Pokemon | string;
const ob : Pokemon = {

    name : "jhghnbkjn",
    pokemonType : "jgyfyf",
    pokemonId : 200

}


interface Game1<value>{

    id : value;
    name : value;
    age : value;
    major : value;
}

const ob1 : Game1<string | number | Array<string | number>> = {

    id : 1,
    name : "Razan",
    age : 24,
    major : ["CS","Front-End"]
}*/
