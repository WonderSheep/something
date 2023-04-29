//创建数组
let a = [];

let a1 = Array();

let a2 = new Array(3);//length == 3

let a3 = Array(3,1,8)//[3,1,8]

//Array.of()
//ES6 Array.of()返回由所有参数值组成的数组
//为了解决上述构造器因参数个数不同，而导致的创建行为有差异的问题
//如:let a2 = new Array(3);let a3 = Array(3,1,8) 一个创建长度为3的空数组，一个创建318


let a4 = Array.of(3, 11, 8); // [3,11,8]
let a5 = Array.of(3); // [3]

//Array.from()
//将两类对象转为真正的数组

    // 1. 对象拥有length属性
    let obj = {0: 'a', 1: 'b', 2:'c', length: 3};
    let arr1 = Array.from(obj); // ['a','b','c'];
    // 2. 部署了 Iterator接口的数据结构 比如:字符串、Set、NodeList对象
    let arr2 = Array.from('hello'); // ['h','e','l','l','o']
    let arr3 = Array.from(new Set(['a','b'])); // ['a','b']
    let arr4 = Array.from(...argument);//

//Array.splice()
//添加/删除数组元素(改变原数组)

    let arr5 = [1,2,3];
    a.splice();
    //三个参数 start(起点),howmany(长度),...items(删除后添加的项目,可选)
    //原地修改数组，返回值是被删除的元素所组成的数组

//Array.sort()
//排序，修改原数组

//参数:一个函数 function(a,b){
//    return a-b;升序 b-a降序
//}


//Array.pop()删除最后一个元素，修改原数组
//Array.shift()删除开头元素，修改原数组
//Array.push()
//Array.unshift()元素添加到开头
//Array.reverse()颠倒


//ES6:copyWithin(target,start,end)指定位置的成员复制到其他位置，修改原数组
//三个参数 
//target 1.必需，从该位置开始替换数据，如果为负值，表示倒数
//start  2.可选，从该位置开始读取数据，默认为0，如果为负值，表示倒数
//end    3.可选，到该位置前停止读取数据，默认等于数组长度，默认等于数组长度，使用负数可从数组结尾规定位置


// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

//Array.fill() 填充数组,修改原数组
//三个参数 1.要填充的数组的值 2.填充开始的位置(可选默认0) 3。填充结束的位置(可选，默认到结尾)

//不改变原数组的方法

//Array.slice()
//两个参数 begin end [a,b)

//Array.join()
//数组转字符串

//Array.toLocaleString()数组转字符串

//toSrting

//cancat

//Araay.indexOf() 返回在数组中找到一个给定元素的第一个索引
//两个参数 target fromIndex 从哪里开始找

//Array.lastIndexOf()查找指定元素在数组中的最好一个位置
//定义:方法返回指定元素，在数组中的最后一个的索引，如果不存在则返回-1

//includes() 查抄数组是否包含某个元素 返回Boolean
//Array.includes() 参数和上面一致






