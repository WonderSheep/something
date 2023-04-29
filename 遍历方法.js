//forEach
//无返回值

//array.forEach(function(currentValue,index,arr){},thisValue)
//两个参数 一个函数 一个该函数的this
//该函数又接收三个参数 
//每一次遍历的item 下标index 当前所在数组
//和map的区别是foreach无返回值,但是对item的更改会影响到原数组

//const result = array.forEach(function(currentValue,index,arr){},thisValue)
//undefined

//array.map(function(){},thisValue)
//参数和上面一样
//和foreach的区别是，对item的处理不会影响到原数组，返回处理好的新数组

//array.every() 监测数组所有元素是否都符合条件
//参数和上面一样
//如果有一个item条件不满足，则整个函数都返回false,反之返回true

//array.some() 数组中的是否有满足判断条件的元素
//如果有一个item满足条件，那整个表达式返回true
//反之，返回false 和every正好相反

//array.filter() 过滤器
//参数还是一样，返回一个新数组
//该新数组的值是回调函数中返回值为true的item

//array.reduce() 数组累加器
//array.reduce(function(total,currentValue,currentIndex,arr),initialValue)
//total(必须)，初始值，或者上一次调用回调返回的值
//currentValue(必须),数组当前元素的值
//Index(可选)，当前元素的索引值
//arr可选，数组对象本身

//initialValue(可选):指定第一次回调的第一个参数

//回调第一次执行时，
//如果initialValue被提供，那么total == initialValue currentValue等于数组第一项
//如果initialValue未被提供，那么total等于数组第一项，currentValue等于第二项


//ES6:find()参数和every那些是一样的
//若找到了，则返回找到的对象
//findIndex()参数一样，若找到返回下标

//ES6 array.keys() values() entries()
//返回 键的数组 值的数组 键值对的数组

for (let index of ['a', 'b'].keys()) {
    console.log(index);
  }
  // 0
  // 1
  
  for (let elem of ['a', 'b'].values()) {
    console.log(elem);
  }
  // 'a'
  // 'b'
  
  for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
  }
  // 0 "a"
  // 1 "b"
