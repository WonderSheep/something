let target = {a:1};
let object2 = {b:2};
let object3 = {c:3};

Object.assign(target,object2,object3);
//参数:第一个是目标对象，后面两个都是源对象(复制哪些东西)

console.log(target);//{a:1,b:2,c:3}

