//Array.from() 是一个静态方法，可以从类数组对象或可迭代对象创建一个新的数组实例。
// 它的语法为： Array.from(arrayLike [, mapFn [, thisArg]])

// arrayLike：必需，一个类数组对象或可迭代对象
// mapFn：可选，一个映射函数，可以对数组中的每个元素进行处理
// thisArg：可选，执行 mapFn 函数时的 this 值

//参数:Array.from方法的第一个参数可以是一个类数组对象，也可以是一个可迭代的对象，
//例如类数组对象、Set对象、Map对象、字符串、arguments对象等。

const str = 'hello';
const arr1 = Array.from(str);
console.log(arr1); // ['h', 'e', 'l', 'l', 'o']

//所以我们去重可以

const arr = [1,1,2,2,3,3,4,4,5,5];
    const setData = Array.from(new Set(arr));
    console.log(setData)

//但是Set去重有一个弊端，他无法去重引用类型的数据。比如对象数组。
//所以如果您的数组中都是值类型的数据（比如全string或者全number），
//那么使用Set进行去重一定是首选，会为您减少很多的麻烦。