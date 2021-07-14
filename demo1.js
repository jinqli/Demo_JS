// 普通函数
function fun() {
  return 100;
}
// 函数表达式
const fun1 = function () {
  return 100;
};

console.log(fun()); // 100
console.log(fun1()); // 100

// 箭头函数
// 函数体里面只有一行代码的话可以省略花括号和return
const arrow = (x, y) => {
  return x + y;
};

const arrow1 = (x) => x;

/*
  区别
  1. this指向不同
  2. 普通函数，谁调用这个函数，this就指向谁
  3. 箭头函数，在哪里定义函数，this就指向谁
*/
const woman = {
  name: "娜扎",
  age: "27",
  sayName() {
    //
    console.log(`我是${this.name}`);
    setTimeout(function () {
      console.log(this.name); // undefined 由于setTimeout是全局下的方法，所以this指向window
    }, 1000);
    setTimeout(() => {
      console.log(this.name); // 娜扎
    }, 1000);
  },
};

woman.sayName(); // 我是娜扎 此时的this是woman
