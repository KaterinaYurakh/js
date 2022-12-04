//1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Peter';
delete user.name;
console.log(user);

//2
const user2 = {
    name: 'John'
};
user2.name = 'Pete';
//то что нахлжиться в обьектах мы можем менять

//3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum)