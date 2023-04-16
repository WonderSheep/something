function throttle(fn,delay){
    let permit = true;
    return function(){
        if(permit){
            fn.apply(this,arguments)
            permit = false;
            setTimeout(()=>{
                permit = true;
            },delay)
        }
    }
}