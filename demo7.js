// js 运行机制、事件循环、宏任务、微任务
// 同步 程序按顺序执行
// console.log(1);
// console.log(2);
// console.log(3);

// 异步 先执行一部分 等拿到结果（或到时间）再执行后续代码
/*
1. 计时器：setTimeout  setinterval
2. ajax
3. 读取文件
*/
// 同步代码执行完成后才会执行异步代码
setTimeout(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  console.log(2);
}, 100);

// 单线程 一个任务完成后才会执行下一个任务 会造成代码阻塞

// process.nextTick 与 setImmediate方法
// process.nextTick 在node环境下才可以运行 在同步之后 异步之前执行

process.nextTick(() => {
  console.log(3);
});

// setImmediate 在node环境下才可以运行 在异步（当前事件循环）之后

// 事件循环
/*
  1. 运行栈： 同步 
  2. 任务队列：异步 计时器的时间到了就会放进去
  3. 事件循环：不断判断任务队列有没有任务 同时判断运行栈的任务执行完了没有 完了就执行任务队列的任务
*/

// 宏任务 微任务
/*
  宏任务：计时器、ajax、读取文件
  微任务：promise.then
*/
/*
  执行顺序
  1. 同步程序
  2. process.nextTick
  3. 微任务
  4. 宏任务
  5. setImmediate
*/

// Promise

// async 返回的是一个Promise对象
// await 后面跟一个Promise对象可以直接拿到resolve的数据
async function fun() {
  return 1;
}

function fun1() {
  FocusNavigationEvent;
  return new Promise(function (resolve) {
    console.log("同步代码");
    resolve("异步代码");
  });
}

let a = fun();
console.log(a); // Promise { 1 }
a.then((data) => {
  console.log(data);
});
