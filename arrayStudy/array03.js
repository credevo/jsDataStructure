var da = [1,2,3,4,5];
// console.log(da.pop());
// console.log(da);


// console.log(da.shift());
// console.log(da);

// var da2 = da.slice();
// if(da == da2) console.log('equal');
// else console.log('not equal');

var da3 = Array.from(da); //깊은 복사 cloneDeep

da3[1]  = 5;
console.log(da[1]);
console.log(da3[1]);

var da2 = da;       //얇은 복사
da2[1] = 100;
console.log(da[1]);
console.log(da2[1]);
console.log(da3[1]);

var arr = [1,2,3,4,5];
var removeArr = arr.splice(1,2); // [2,3]
console.log(arr) // arr = [1,4,5]





var spliceTest = [1,2,3,4,5,6];
// var spliceTest2 = spliceTest.splice(1,2);
// console.log(spliceTest2);

var sliceTest2 = spliceTest.splice(1,2);
console.log(sliceTest2);
console.log(spliceTest);

/**
 * slice 추출의 목적을 가지고 기존 arr 유지
 * => Array.slice(1) // 전체 복사가 됨
 * => Array.slice(1,2) // 1위치앞에서 2위치앞까지 (사이사이 끈어서 생각 )
 * splice 추출하고 기존에서 제거+추가 가능
 * => Arrry.splice(1,2) 1위치부터 2개까지
 */
 console.log("============================");

var concatTest = [1,2,3,4,5];
var concatTextTest =[{val:1},{val:2},{val:3},{val:4}];
var d = concatTextTest.concat(concatTest); //새로운 배열을 리턴한다.
console.log(d);
if(d == concatTextTest) console.log(1);
console.log(concatTextTest);
/**
 * concat 은 새로운 배열을 리턴한다. 인식해야 하는 점이다.
 * 
 */


// spread 연산자
console.log("============console_spread===");
var testArr = [1,2,3,4,5];

var testArr2 = {...testArr};
var testArr3 = [...testArr];

console.log(testArr2);
console.log(testArr3);


function console_spread(a,b,c,d){
    console.log(a+b+c+d);
}
console_spread(testArr);
console_spread(...testArr);


/**
 * 어떤 수가 주어졌을때 배열내의 어떤 항목 두개를 합쳐야 해당 수가 되는지
 * 찾아라.
 * 
 * 문제 배열 arr이 있고 어떤수 weight가 주어졌을때
 * 합쳐서 weight가 되는 배열 내 항목 두 개의 인덱스를 반환하라.
 * 만약 합쳐서 weight가 되는 항목 두 개가 존재하지 않는 경우 -1을 반환하라
 * 예를 들어 [1,2,3,4,5]와 같은 배열이 있다고 할때 어떤 수 두개를 더해야 9가 될까?
 * 물론 정답은 4,5이다.
 */

function findArray(sum,arr){
    

}

