{
  /**
   * or의 개념(|를 사용)
   * 특정 변수가 취할 수 있는 값들의 목록을 type으로 지정
   * 특정 객체가 취할 수 있는 key들의 type을 지정
   *
   * 자동완성이 아주 유용합니다. 👍
   */

  type Field = "front-end" | "back-end" | "mobile-app" | "AI";
  type Industry = "game" | "e-commerce" | "finance";

  // key들의 type을 지정
  type SoftwareDeveloper = {
    name: string;
    // type Field를 field라는 변수에 지정
    field: Field;
    // type Industry를 industry라는 변수에 지정
    industry: Industry;
  };

  function makeSoftwareDeveloper(
    name: string,
    field: Field,
    industry: Industry
  ): SoftwareDeveloper {
    return {
      name,
      field,
      industry,
    };
  }

  console.log(makeSoftwareDeveloper("이민선", "front-end", "game"));
  console.log(makeSoftwareDeveloper("이수민", "front-end", "e-commerce"));
}
