let obj1 = {a:1,b:{c:2}}

let obj2 = {...obj1};
obj1.a = 2;

console.log(obj1);//{a:2,b:{c:2}}
console.log(obj2);//{a:1,b:{c:2}}

obj1.b.c = 1;

console.log(obj1);//{a:2,b:{c:1}}
console.log(obj2);//{a:1,b:{c:1}}

//他不会拷贝对象的继承属性
//他不会拷贝对象的不可枚举的属性
//可以拷贝symbol类型的属性