//Algo 1 //
var testArr = [6,3,5,1,2,4];
var sum= 0;
var num= 0;

for(var i= 0; i < testArr.length; i++) {
    num= testArr[i];
    sum+=num;
    console.log("Num " + num, "Sum " + sum)
}

//Algo 2//

var testArr = [6,3,5,1,2,4];


for(var i= 0; i < testArr.length; i++) {
    testArr[i] = i * testArr[i];
}
console.log(testArr)