// 1
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: active
  };
console.log(user.studentstatus);


// // 2
let names = ['a', 'b', 'c', 'd']
for (let item of names) {
  console.log(item);
}


// // 3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] > 5) {
    console.log(numbers[x]);
  }
}


// // 4
let user = {
  name: 'giorgi',
  age: '20',
  studentstatus: 'active'
}
if (user.age > 18 && user.studentstatus == 'active') {
  console.log(hello);
}  else if (user.name == 'giorgi') {
  console.log(hellogiorgi);
}  else if (user.studentstatus == 'active' || user.age < 25) {
  console.log(helloworld);
}  else {
  console.log(error);
}


// 5
let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
 for (let x of array) {
   if (typeof x == 'string') {
     console.log(x);
   }
 }


//  6
let users = [
  {username:'test1', status:false},
  {username:'test2', status:false},
  {username:'test3', status:true}
]
for (let x of users) {
  if (x.status == true) {
    console.log(x);
  }
}

 
