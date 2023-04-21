//let const var 区别

//1.块级作用域 

//块作用域由{}包括，let和const具有块级作用域，var不存在块级作用域。
//块级作用域解决了ES5中的两个问题
        //1.内层变量可能覆盖外层变量
        //2.用来计数的循环变量泄露为全局变量

    var a = 10;
    (function print(){
        a = 1;
        console.log(a);
    })();
    console.log(a);

    let b = 10;
    (function print(){
        //b = 1 这里我的原本的误区是里面的b访问不到外面的变量，其实是可以访问到的
        //所谓作用域,就是这两个let在定义时作用的地狱不一样，自己看例子行了
        let b = 1;
        console.log(b);
    })();
    console.log(b);

//（2）变量提升： var存在变量提升，let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。

//（3）给全局添加属性： 浏览器的全局对象是window，Node的全局对象是global。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。

//（4）重复声明： var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const和let不允许重复声明变量。

//（5）暂时性死区： 在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用var声明的变量不存在暂时性死区。

// 和变量提升说的同一个东西 一个针对var 一个针对let const

console.log(x); // 输出undefined 我误解了变量提升，我以为输出10，但只是不报错而已
var x = 10;

//真实的变量提升也就是可以在声明前提前使用，不报错，但是undefined
//暂时性死区就会报变量提升不报的错

function example() {
    console.log(typeof foo); // 报错：Cannot access 'foo' before initialization
    let foo = 'hello, world!';
  }
  
  example();

  //所以 暂时性死区其实就是let和const报了var报不了的错

  //（6）初始值设置： 在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值

  //（7）指针指向： let和const都是ES6新增的用于创建变量的语法。 let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。