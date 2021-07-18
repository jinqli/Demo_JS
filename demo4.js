// 栈内存：Number、String、Boolean、null、undefined
let a = 10;
let b = a;
a = 20;
// console.log(a); // 20
// console.log(b); // 10
// 堆内存：对象
let obj = { name: "ljq" };
let c = obj;
let d = obj;
c.name = "古力娜扎";
// console.log(c.name); // 古力娜扎
// console.log(d.name); // 古力娜扎
// 对象拷贝
const object = {
  name: "刘诗诗",
  age: 33,
  friend: {
    name: "胡歌",
  },
};
// 1. 浅拷贝 for in
let newObj = {};
for (const key in object) {
  newObj[key] = object[key];
}
// newObj.name = "唐嫣";
// newObj.friend.name = "霍建华";
console.log(newObj);
console.log(object);

// 深度拷贝
// 1. 递归：自己调用自己
function fun1(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + fun1(n - 1);
  }
}
// console.log(fun1(3)); // 6

// 递归拷贝

function deepnCopy(object) {
  let newObj = {};
  for (const key in object) {
    // 使用instanceof判断是不是对象 是的话继续调用自己进行浅拷贝
    if (object[key] instanceof Object) {
      newObj[key] = deepnCopy(object[key]);
      console.log(deepnCopy(object[key]));
    } else {
      newObj[key] = object[key];
    }
  }
  return newObj;
}

// newObj.friend.name = "杨幂";
console.log(deepnCopy(object));

// 通过JSON实现深度拷贝
function jsonCopy(obj) {
  // 转换成字符
  let str = JSON.stringify(obj);
  let newObj = JSON.parse(str);
  return newObj;
}

console.log(jsonCopy(object));
