// this:谁调用我,我就指向谁
// 普通函数函数名() :window
// 对象方法 对象名.方法名() :对象
// 构造函数 new 函数名() :new创建的实例对象

var obj = {
    say: function() {
      var f1 = () =>  {
        console.log("1111", this);
      }
      f1();
    },
    pro: {
      getPro:() =>  {
         console.log(this);
      }
    }
 }
 var o = obj.say;
 o();
 obj.say();
 obj.pro.getPro();

 //1111 window
 //1111 obj
 //window 