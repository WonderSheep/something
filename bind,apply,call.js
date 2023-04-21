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
