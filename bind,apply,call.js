//call, apply, 和 bind 是 JavaScript 中用于控制函数执行时 this 值的方法。
//call 和 apply 的作用非常相似，都是用于指定函数执行时的 this 值。
//它们的第一个参数都是要绑定的 this 值，
//接下来的参数则是传入函数的参数列表。它们的区别在于传参方式不同，
//call 的传参是通过直接传入一个一个的参数列表，
//而 apply 的传参是通过传入一个数组。
//他们都是改变了this之后马上执行函数(和bind的区别)

function greet() {
    console.log(`Hello, ${this.name}!`);
  }

const person = { name: 'Alice' };
greet.call(person); // 输出：Hello, Alice!

const person1 = { name: 'Alice' };
greet.apply(person1); // 输出：Hello, Alice!

//另外，如果我们需要将一个函数绑定到一个对象上并返回一个新的函数，我们可以使用 bind 方法。
//它和 call / apply 的作用相似，
//但是它不会立即执行函数，而是返回一个新的函数，该函数的 this 值已经被绑定到了指定的对象上。

const person2 = { name: 'Alice' };
const greetPerson = greet.bind(person2);
greetPerson(); // 输出：Hello, Alice!

//手写call

//function类的原型链上添加自己写的call给别的函数调用
Function.prototype.myCall = function(target,...args){
  target = target || window //当target不存在时,给个window
  const symbolKey = Symbol();//创造独一无二的变量
  target[symbolKey] = this;//这里的this其实就是函数，将函数加到调用的对象身上去
  //例如 Person.say.myCall(Person2)时,myCall的this其实就是say,就比如obj.say()的this是obj一样，就近原则myCall的this就是函数，这里把函数赋值到调用的对象的身上
  const res = target[symbolKey](...args)//调用函数
  delete target[symbolKey];//调用完了立马删掉
  return res;//返回结果
}

//难点就是这里this赋值的理解，实际上就是把函数(this)当成个对象，然后赋值给target
//例如 Person.say.myCall(Person2)时,myCall的this其实就是say,就比如obj.say()的this是obj一样，就近原则myCall的this就是函数，这里把函数赋值到调用的对象的身上


//apply其实也一样

Function.prototype.myApply = function(target,...args){
  target = target || window //当target不存在时,给个window
  const symbolKey = Symbol();//创造独一无二的变量
  target[symbolKey] = this;//这里的this其实就是函数，将函数加到调用的对象身上去
  //例如 Person.say.myCall(Person2)时,myCall的this其实就是say,就比如obj.say()的this是obj一样，就近原则myCall的this就是函数，这里把函数赋值到调用的对象的身上
  const res = target[symbolKey](...args)//调用函数
  delete target[symbolKey];//调用完了立马删掉
  return res;//返回结果
}

//完全套用

//手撕bind

Function.prototype.myBind = function(target,...outArgs){
  target = target || {} //如果没有传入target的话,那调用的可不就是个空对象嘛
  const symbolKey = Symbol();
  target[symbolKey] = this;//再说一次，将调用的函数添加到target身上
  return function(...innerArgs){
    const res = target[symbolKey](...outArgs,...innerArgs);
    //这里传入的参数说下,第一次用bind的时候可以传一次参数,返回的函数调用时也可以再传一次参数
    //不需要delect这个函数，必须保证第二次调用时不出问题
    return res
  }
}