// 栈内存：Number、String、Boolean、null、undefined
let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10
// 堆内存：对象
let obj = { name: "ljq" };
let c = obj;
let d = obj;
c.name = "古力娜扎";
console.log(c.name); // 古力娜扎
console.log(d.name); // 古力娜扎
// 对象拷贝
