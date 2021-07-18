// 基于call()的继承 可以实现多重继承
// 父类
function Animal() {
  this.eat = function () {
    console.log("吃东西");
  };
}
// 父类
function Bird() {
  this.fly = function () {
    console.log("飞翔");
  };
}

// 子类
function Cat() {
  // this指向cat
  Animal.call(this); // 将Animal的this指向cat
  Bird.call(this); // 将Bird的this指向cat
}

const cat = new Cat(); // new一个新对象并将this指向cat
cat.eat(); // 继承Animal的方法
cat.fly(); // 继承Bird的方法

// ES6类的继承

// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }
//   login() {
//     console.log("登录");
//   }
// }

// // 关键字extends实现继承
// class Admin extends User {
//   deleteUser() {
//     console.log("删除用户");
//   }
// }

// let admin = new Admin();
// admin.login();

// ES5继承 基于prototype
function User(username, password) {
  this.username = username;
  this.password = password;
  this.login = function () {
    console.log("登录");
  };
}

// 把父类的this指向给子类的prototype来实现继承
Admin.prototype = new User();

function Admin() {
  this.deletePerson = function () {
    console.log("删除用户");
  };
}

let admin = new Admin();
admin.login();

// 原型链 因为js的特性 所以prototype作为对象也有原型 然后一直找下去直达Object.prototype 也就是null
// 所有对象的原型最终指向都是Object.prototype 所以Object也是一个构造函数
// console.log(Object.prototype);
