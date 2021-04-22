//1
function array255() {
    var arr= [];
    for(var i = 1; i<=255; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(array255());

//2
function sumEven() {
    var sum= 0;
    for(var i = 1; i <= 1000; i++) {
        if(i % 2 == 0) {
            sum+=i
        }
    }
    return sum;
}
console.log(sumEven())

//3
function sumOdd() {
    var sum= 0;
    for(var i = 1; i <= 5000; i++) {
        if(i % 2 != 0) {
            sum+=i
        }
    }
    return sum;
}
console.log(sumOdd())

//4
var arr= [];
function sumArray(arr) {
    var sum= 0;
    for(var i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    return sum;
}
console.log(sumArray(arr));

//5
function findMax(arr){
    var max= 0;
    for( var i = 0; i < arr.length; i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//6
var arr = [];
function avgArray(arr) {
    var sumNums = 0;
    for(i = 0; i < arr.length; i++) {
        sumNums += arr[i];
    }
    var avg = sumNums / arr.length;
    return avg;
}
console.log(avgArray(arr));

//7
function returnOdd() {
    var oddArr = [];
    for(var i = 0; i <= 50; i++) {
        if(i % 2 !== 0) {
            oddArr.push(i);
        }
    }
    return oddArr;
}
console.log(returnOdd())

//8
var y = 3;
var arr = [];
function greaterThanY(arr,y) {
    sum = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y){
            sum += 1
        }
    }
    return sum;
}
console.log(greaterThanY(arr,y))

//9
var arr = [];
function squareArr(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    return arr
}
console.log(squareArr(arr));

//10
var arr= []
function repNegatives(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i]= 0;
        }
    }
    return arr;
}
console.log(repNegatives(arr))

//11
var arr= [1,2,3];
function maxMinAvg(arr) {
    if(arr.length === 0){
        return null;
    }
    var max= arr[0];
    var min= arr[0];
    var sumNums= 0;
    newArr= [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min) {
            min= arr[i];
        }
        sumNums+= arr[i];
        var avg= sumNums / arr.length;
    }
    newArr.push(max, min, avg);
    return newArr;
}
console.log(maxMinAvg(arr));

//12
var arr = [5,4,3,2,3];
function swap(arr) {
    var temp= arr[arr.length - 1];
    arr[arr.length - 1]= arr[0]
    arr[0] = temp
    return arr
}
console.log(swap(arr))

//13
var arr= []
function repNegatives(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i]= 'Dojo';
        }
    }
    return arr;
}
console.log(repNegatives(arr))