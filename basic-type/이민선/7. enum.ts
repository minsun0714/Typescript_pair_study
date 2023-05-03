{
  /**
   * enum type은 쓰지 않는게 좋음
   * 과거에는 enum type이 지정된 변수에 enum에 없는 다른 값으로 재할당이 가능했지만, 이제는 그러한 경우 read-only 변수라고 에러가 뜹니다.
   *
   * 그럼에도 불구하고 enum type은 사용이 권장되지 않습니다. 그 이유는?
   * - tree-shaking이 되지 않음.
   *   - tree-shaking이란? 사용하지 않는 코드를 삭제하는 것.
   *   - enum은 Typescript에서 자체적으로 구현한 기능인데, Javascript로 트랜스파일하면 IIFE(즉시 실행함수)를 포함한 코드를 작성한다.
   *   - Rollup과 같은 번들러는 IIFE를 사용하지 않는 코드라고 판단하지 않아서 Tree-shaking 되지 않는다.
   *   - 따라서 실제로 사용이 안 되더라도 최종 번들에 포함된다.
   *
   * 참고 :
   * [LINE Engineering] TypeScript enum을 사용하지 않는게 좋은 이유를 Tree-shaking 관점에서 소개합니다.
   * https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking
   *
   * 대안 : union type을 사용할 때 가독성이 특별히 나빠지는 경우가 아니라면, enum 대신 union을 쓰는 것이 좋다.
   */

  // 문자열 열거형 (string enums)
  enum Day {
    MON = "월",
    TUE = "화",
    WED = "수",
    THU = "목",
    FRI = "금",
    SAT = "토",
    SUN = "일",
  }

  // 숫자 열거형(numeric enums)
  enum Response {
    No,
    Yes,
  }

  let totalScore = { drinkWater: 0, sleep: 0, exercise: 0 };
  function IsEnoughToday(day: Day, [drinkWater, sleep, exercise]: Response[]) {
    totalScore.drinkWater += drinkWater;
    totalScore.sleep += sleep;
    totalScore.exercise += exercise;

    console.log(`${day}요일도 체크 완료!`);
  }
  IsEnoughToday(Day.MON, [Response.No, Response.No, Response.No]);
  IsEnoughToday(Day.TUE, [Response.Yes, Response.No, Response.No]);
  IsEnoughToday(Day.WED, [Response.No, Response.Yes, Response.No]);
  IsEnoughToday(Day.THU, [Response.No, Response.No, Response.Yes]);
  IsEnoughToday(Day.FRI, [Response.No, Response.Yes, Response.Yes]);

  console.log(totalScore);
}
