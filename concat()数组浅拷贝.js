//concat是一个数组方法，用于将两个或多个数组合并成一个新数组。
//concat不会修改原始数组，返回一个新数组，新数组包含被合并的所有数组的元素
//按照合并的顺序

const arr1 = [1];
const arr2 = [2];
const arr3 = [3];

const arr4 = arr1.concat(arr2,arr3);

console.log(arr3);
//[1,2,3]