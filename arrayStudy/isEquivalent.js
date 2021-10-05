function isEquivalent(obja, objb) {
  // property 분리

  const aProps = Object.getOwnPropertyNames(obja);
  const bProps = Object.getOwnPropertyNames(objb);

  // 길이 체크
  if (aProps.length != bProps.length) {
    return false;
  }
  // 속성값 체크
  //   aProps.forEach(function (propName) {
  //     if (obja[propName] != objb[propName]) {
  //       console.log(obja[propName] != objb[propName]);
  //       return false;
  //     }
  //   });

  for (let i = 0; i < aProps.length; i++) {
    const propsName = aProps[i];
    console.log("propsName : " + propsName);
    if (obja[propsName] != objb[propsName]) {
      return false;
    }
  }

  //최종 길이와 속성값이 같기에 true를 리턴 한다.
  return true;
}

var checkValue = isEquivalent({ h1: 1 }, { h1: 2 });
console.log(checkValue);
