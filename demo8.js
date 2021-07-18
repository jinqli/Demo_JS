// 作用域 一套查找变量的规则

// 闭包 函数内部定义函数且使用外部函数的变量 然后把这个函数return出去 会导致内存泄漏 也就是这个函数在内存里面得不到释放
function outerFun() {
  let a = 1;
  function innerFun() {
    console.log(a);
  }
  return innerFun; // 返回的是函数的引用 函数本身是对象 函数名是指向函数的指针
}

outerFun()(); // 1
