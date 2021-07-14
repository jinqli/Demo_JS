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
