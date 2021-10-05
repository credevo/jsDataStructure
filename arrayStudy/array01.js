// function isEquivalent(a, b) {
//   var aProps = Object.getOwnPropertyNames(a);
//   var bProps = Object.getOwnPropertyNames(b);

//   console.log(aProps);
//   console.log(bProps);

//   if (aProps.length != bProps.length) {
//     return false;
//   }

//   for (var i = 0; i < aProps.length; i++) {
//     var propName = aProps[i];

//     // 속성 값이 다른 경우 두 객체는 같지 않다.
//     if (a[propName] != b[propName]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isEquivalent({ h1: 12 }, { h1: 12 }));
var arr = [0, 1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5, 6];
var outputFor = [];
for (let i = 0, len = arr.length; i < len; i++) {
  if (arr[i] == 0) {
    outputFor.push(arr[i]);
  } else {
    outputFor.push(false);
  }
}
console.log(outputFor);

var outputMap = arr.map((elm) => (elm == 0 ? elm : false));
var outputMap2 = arr2.map((elm) => (elm == 0 ? elm : false));

console.log(outputMap);

function isEquivalentArray(a, b) {
  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
ㅇ;
console.log(isEquivalentArray(outputFor, outputMap));
console.log(isEquivalentArray(outputFor, outputMap2));
