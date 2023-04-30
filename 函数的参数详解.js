//首先有一个函数

let name = 'ConardLi';
function changeValue(name){
  name = 'code秘密花园';
}
changeValue(name);
console.log(name);//ConardLi

//看到这里我刚开始会觉得name的输出是 code秘密花园
//但其实不是
//其实，当我们在执行changeValue(name)时，
//函数内部创建了一个名为name的局部变量，然后我们把ConardLi(外界传入)赋给这个局部变量
//然后这个函数就针对这个局部变量name重新赋值给code秘密花园
//但是这并不会影响外部的name，所以输出时依旧是ConardLi

//再来看个例子
let obj = {name:'ConardLi'};
function changeValue(obj){
  obj.name = 'code秘密花园';
}
changeValue(obj);
console.log(obj.name); // code秘密花园

//那这里为什么又是code秘密花园了呢
//还是同理，创了一个obj的局部变量，然后从外界传入了一个obj
//此时 局部变量obj和外部obj指向了同一个{name:'ConardLi'}
//所以内部修改会影响外部

//又来一个例子

let obj1 = {};
function changeValue(obj1){
  obj1.name = 'ConardLi';
  obj1 = {name:'code秘密花园'};
}
changeValue(obj1);
console.log(obj1.name); // ConardLi

//那么 这里为什么不是code秘密花园呢
//首先 开始还是和上一步一样 内部和外部都是同一个对象
//所以obj1.name = 'ConardLi'生效
//后续的obj1 = {name:'code秘密花园'};
//局部变量指向了另一个对象，此时这个局部变量和外部变量断开了连接
//所以外部变量当然是ConardLi