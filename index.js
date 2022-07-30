

//Create your custom map method (myMap), which will work exactly similar to Array.map().

let arr = new Array(1,2,3,4,5);

Array.prototype.myMap=function(func){


    let arr= this;

    for(let i=0;i<arr.length;i++){
        let el=arr[i];

        let x=func(el);

    }
};

let x=arr.map(function(x){
    return x*2;
});
console.log(x);


//Create your custom forEach method (myForEach), which will work exactly similar to Array.forEach().

Array.prototype.myForeach = function(callback){
    
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }

//Create your custom filter method (myFilter), which will work exactly similar to Array.filter().

Array.prototype.myfilter = function(callback, initialValue){
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
  }

//Create your custom reduce method (myReduce), which will work exactly similar to Array.reduce().

Array.prototype.myReduce = function(callback, initialValue){
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
  }

