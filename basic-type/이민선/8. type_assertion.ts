{
  /**
   * type assertion도 꼭 필요한 경우가 아니라면 사용하지 않는 것이 좋다.
   * 타입스크립트 컴파일러가 해당 값에 대한 타입 체크를 하는 게 아니라 내가 타입 체크를 하게 됨.
   * 결과적으로 실수로 타입을 잘못 할당할 가능성이 높아지고 타입 안정성이 떨어지게 된다.
   */

  // 처음에 사용했던 나쁜 예시 👎👎👎
  // .getDate() 메서드는 number type의 값을 반환하는데, 28~31 중에 하나일 것이라고 내 마음대로 가정하여 강제로 타입을 변환하려고 했음.
  // 만약 이 가정이 틀리다면? 잘못된 결과를 반환할 수도 있으므로 코드 안정성이 떨어진다.
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  type LastDate = 28 | 29 | 30 | 31;

  const lastDateOfMonth: LastDate = new Date(
    year,
    month + 1,
    0
  ).getDate() as LastDate;

  // 대안: 타입 가드 함수
  // num is LastDate <- 인자가 LastDate type 인지 확인 후 boolean type의 값을 return 한다.
  function isLastDate(num: number): num is LastDate {
    return [28, 29, 30, 31].includes(num);
  }

  if (!isLastDate(lastDateOfMonth)) {
    throw new Error("마지막 날짜가 유효하지 않습니다.");
  } else {
    console.log(`${month + 1}월의 마지막 날짜는 ${lastDateOfMonth}일입니다.`);
  }
}
