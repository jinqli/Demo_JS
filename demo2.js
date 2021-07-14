//call() 是一个方法，是函数的方法

function fun() {
  console.log("fun");
}

fun.call(); // 与fun()效果一样 调用函数

// call()可以改变函数中的this指向
function fun1() {
  console.log(this.name);
}

const cat = {
  name: "小白",
  eat(food1, food2) {
    console.log(food1, food2);
  },
};

fun1.call(cat); // 小白 把函数的this指向cat

const dog = {
  name: "小黑",
};

cat.eat.call(dog, "鱼", "肉"); // 传多个参数使用逗号隔开
cat.eat.apply(dog, ["鱼", "肉"]); // 区别在于传参数的方式不同
const result = cat.eat.bind(dog, "鱼", "肉"); // 与call的传参方式相同, 但是不会像call一样调用函数，它会返回一个函数
result();
