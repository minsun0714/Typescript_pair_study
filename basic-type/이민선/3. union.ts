{
  /**
   * or의 개념(|를 사용)
   * 특정 변수가 취할 수 있는 값들의 목록을 type으로 지정
   * 특정 객체가 취할 수 있는 key들의 type을 지정
   *
   * 자동완성이 아주 유용합니다. 👍
   */
  type Job = "developer" | "designer";
  type DeveloperField = "front-end" | "back-end" | "mobile-app" | "AI";
  type DesignerField = "graphic" | "web" | "mobile" | "UX";
  type Industry = "game" | "e-commerce" | "finance";

  // key들의 type을 지정
  type Developer = {
    name: string;
    job: Job;
    field: DeveloperField;
    industry: Industry;
  };

  type Designer = {
    name: string;
    job: Job;
    field: DesignerField;
    industry: Industry;
  };

  function WorkerInIT(
    name: string,
    job: Job,
    field: DeveloperField | DesignerField,
    industry: Industry
  ): Developer | Designer {
    return {
      name,
      job,
      field,
      industry,
    };
  }

  console.log(WorkerInIT("이민선", "developer", "front-end", "game"));
  console.log(WorkerInIT("이수민", "developer", "front-end", "e-commerce"));
}
