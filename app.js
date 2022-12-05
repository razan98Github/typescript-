// Question One //
var fun = function (a, b) {
    return (a + b);
};
console.log(fun(5, 6));
var fun1 = function (params) {
    return params.first + " " + params.second;
};
console.log(fun1({ first: 20, second: 40 }));
// Question three //
var fun2 = function (user) {
    return user.firstName;
};
console.log(fun2({ firstName: "Ali" }));
// Question four //
var fun3 = function (one, two) {
    return one;
};
console.log(fun3("Razan"));
var user1 = {
    id: 1,
    firstName: "Razan",
    lastName: "Barham",
    isAdmin: false
};
var fun4 = function (user) {
    return user.id;
};
console.log(fun4(user1));
var user2 = {
    id: 5,
    firstName: "Omar",
    lastName: "Khaled",
    isAdmin: "Admin"
};
var fun5 = function (user) {
    return user.isAdmin;
};
console.log(fun5(user2));
var p1 = {
    id: 2,
    firstName: "Adam",
    lastName: "Ahmad",
    isAdmin: "SuperUser",
    posts: [{
            id: 5,
            title: "My Book",
            body: "Working on my Book"
        }]
};
var make = function () {
    return {
        id: 1,
        firstName: "Razan",
        lastName: "Barham",
        isAdmin: "User",
        posts: [{ id: 5, title: "Book One", body: "Working on my first book" }]
    };
};
var fun6 = function () {
    fetch('https://www.boredapi.com/api/activity').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
};
fun6();
// Question 10 // 
var s1 = function (set) {
    console.log(s1);
    return set;
};
s1("Razan Barham");
s1(["razan", "huda", "muna"]);
var ob2 = {
    id: 1,
    name: "Razan",
    age: 24,
    major: "CS"
};
// Question 12 //
// Question 13 //
function checkStatus(status) {
    var request = new XMLHttpRequest();
    request.open("GET", status);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            alert("This Request has been done");
        }
        else {
            alert("Error Happened");
        }
    };
}
checkStatus("https://www.boredapi.com/api/activity");
function echo(item) {
    console.log(item.name);
    item.hello("Hello World");
    item.calc(3);
    return item;
}
echo({
    name: "John Doe",
    age: 30,
    major: "English",
    hello: function (p) {
        console.log(p);
    },
    calc: function (num) {
        console.log(num * num);
        return num;
    }
});
var CC1 = {
    id: 1,
    firstName: "Razan",
    lastName: "Barham",
    post: {
        id: 200,
        title: "Book One",
        body: "Workin on my first book"
    }
};
console.log("Razan");
console.log("Barham");
