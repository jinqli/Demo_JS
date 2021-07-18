// js中每一个对象都有自己的原型 并且可以使用原型上的属性和方法
// 原型对象可以在js内置对象上进行扩展
const cat = {};
cat.__proto__.eat = function () {
  console.log("吃东西");
};

function Dog() {}
Dog.prototype.sleep = function () {
  console.log("睡觉");
};

// ？构造函数的this指向new创建的对象
let dog = new Dog();

// ES6类的基本语法
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 获取原型的方法
/*
1. 通过对象的__proto__获取
2. 通过构造函数的prototype获取
3. 通过类的prototype获取
*/

console.log(cat.__proto__);
console.log(Dog.prototype);
console.log(Cat.prototype);
