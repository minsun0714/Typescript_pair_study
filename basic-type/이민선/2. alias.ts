{
  /**
   * alias
   * 기존 타입에 새로운 이름을 부여하여 사용하는 방식
   */

  // 2023이라는 숫자로 지정한 Year type을 year라는 변수에 지정하면, 2023만 할당 가능
  type Year = 2023;
  const year: Year = 2023;

  // number만 원소로 둘 수 있는 NumArray type 생성 가능
  type NumArray = number[];
  const numberContainer: NumArray = [1, 2, 3, 4, 5];

  // 객체의 각 key들의 type을 명시적으로 지정할 수 있음.
  // object 타입을 지양하고 type을 사용하면 객체의 구조를 보다 명확하게 표현할 수 있습니다.
  type Movie = {
    title: string;
    cast: string[];
  };

  const myFavoriteMovie: Movie = {
    title: "Gravity",
    cast: ["Sandra Bullock", "George Clooney", "Ed Harris"],
  };
}
