// Array.forEach 에서의 return의 의미 다시 생각해보자.

let arr = [1, 2, 3, 4, 5, 6];
console.log("forEach===");
arr.forEach((e) => {
  if (e == 1) return console.log(e);
});

/**
 * for문은 안에 로직을 자유롭게 데이타를 정의하고 바꿀수 있는 범용 반복문
 * forEach는 각각의 callbackFunc를 반복 iterator를 수행시켜 결과를 원하는 경우? <-- 좀 정리가 잘 안된다 그래도 이해했다.
 * map은 각각의 callbackFunc의 수행결과를 Array 형태로 꼭 리턴해줄때 사용해야 된다.
 */
/**
 * 추가 (책에 있는 내용을 인용했다.)
 * forEach와 다른 반복 방법과의 큰 차이점은
 *      forEach는 반복 바깥으로 빠져나오거나 배열 내 특정 항목들을 건너렬 수 없다는 것이다.
 *      forEach가 각 항목을 반복 접근한다는 의미에 있어 좀 더 명시적이다.
 */
console.log("for in===");
for (let index in arr) {
  console.log(arr[index]);
}

console.log("for of===");
for (let elm of arr) {
  console.log(elm);
}

/**
 * for in은 모든 index에 대한 처리를  for문보다 간편하게 쓸데.
 * for of는 array형태의 자료구조일때 사용하는게 좋을 것 같다.
 *      명시적으로 elm 으로 사용하면 각각의 object를 이해하기 좋을것 같다.
 */
