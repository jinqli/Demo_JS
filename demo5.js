// 同步和异步 先同步后异步

// 回调 使用回调函数获取异步数据
function getTea(fn) {
  setTimeout(() => {
    fn("奶茶");
  }, 1000);
}

function getHotpot(fn) {
  setTimeout(() => {
    fn("火锅");
  }, 2000);
}

// 改变执行顺序 如果需要执行的异步函数多了，对嵌套很多层，导致代码难以维护
// 获取异步数据且控制顺序的时候会形成回调地狱
// getHotpot(function (data) {
//   console.log(data);
//   getTea(function (data) {
//     console.log(data);
//   });
// });

// ES6
// Promise构造函数
let p = new Promise(function (resolve) {
  resolve("resolve");
});

// 通过then获取异步数据
// p.then(function (data) {
//   console.log(data);
// });

function getTea_p() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("promise, 奶茶");
    }, 1000);
  });
}

function getHotpot_p() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("promise, 火锅");
    }, 2000);
  });
}

// 链式调用
getHotpot_p()
  .then(function (data) {
    console.log(data);
    return getTea_p(); // return一个Promise对象
  }) // 然后接着then()
  .then(function (data) {
    console.log(data);
  });

// ES7
// async函数 await
async function getData_async() {
  // 直接获取resolve传递出来的异步数据
  let hotPot = await getHotpot_p();
  console.log(hotPot);
}

getData_async();
