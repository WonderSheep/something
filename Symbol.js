//symbol的特性，
//1.独一无二
//Symbol()
var sym1 = Symbol(); //symbol()
var sym2 = Symbol('ConardLi');//Symbol('ConardLi')
var sym3 = Symbol('ConardLi');//Symbol('ConardLi')
var sym4 = Symbol({name:'ConardLi'})//Symbol([object Object])
console.log(sym2 === sym3);//false

//直接使用Symbol()创建新的symbol变量，可选用一个字符串用于描述。当参数为对象时，将调用对象的toString()方法。

//我们用两个相同的字符串创建两个Symbol变量，它们是不相等的，可见每个Symbol变量都是独一无二的。

//如果我们想创造两个相等的Symbol变量，

//可以使用Symbol.for(key)。
//使用给定的key搜索现有的symbol，如果找到则返回该symbol。否则将使用给定的key在全局symbol注册表中创建一个新的symbol。

var sym1 = Symbol.for('ConardLi');
var sym2 = Symbol.for('ConardLi');
console.log(sym1 === sym2); // true

//2.原始类型
//注意是使用Symbol()函数创建symbol变量，并非使用构造函数，使用new操作符会直接报错
//new Symbol(); // Uncaught TypeError: Symbol is not a constructor

//我们可以使用typeof运算符判断一个Symbol类型：

typeof Symbol() === 'symbol'
typeof Symbol('ConardLi') === 'symbol'

//3.不可枚举

//当使用Symbol作为对象属性时，可以保证对象不会出现重名属性，调用for...in不能将其枚举出来，另外调用Object.getOwnPropertyNames、Object.keys()也不能获取Symbol属性。

//可以调用Object.getOwnPropertySymbols()用于专门获取Symbol属性。
var obj = {
    name:'ConardLi',
    [Symbol('name2')]:'code秘密花园'
  }
  Object.getOwnPropertyNames(obj); // ["name"]
  Object.keys(obj); // ["name"]
  for (var i in obj) {
     console.log(i); // name
  }
  Object.getOwnPropertySymbols(obj) // [Symbol(name)]

//应用场景

//借助Symbol类型的不可枚举，我们可以在类中模拟私有属性，控制变量读写：

const privateField = Symbol();
class myClass {
  constructor(){
    this[privateField] = 'ConardLi';
  }
  getField(){
    return this[privateField];
  }
  setField(val){
    this[privateField] = val;
  }
}

// 在某些情况下，我们可能要为对象添加一个属性，此时就有可能造成属性覆盖，用Symbol作为对象属性可以保证永远不会出现同名属性。

// 例如下面的场景，我们模拟实现一个call方法：

Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
      return undefined; // 用于防止 Function.prototype.myCall() 直接调用
    }
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    const args = [...arguments].slice(1);
    const result = context[fn](...args);
    delete context[fn];
    return result;
  }

