{
  type Repository = {
    name: string;
    description?: string; // description이 없을 수도 있으므로 type에도 optional parameter 지정
  };

  function githubRepository(name: string, description?: string): Repository {
    //description이 있을 경우와 없을 경우를 각각 if문으로 나눠야 한다.
    if (description) {
      return {
        name,
        description,
      };
    } else {
      return {
        name,
      };
    }
  }
  // description이라는 매개변수에 인자를 전달하지 않아도 오류가 나지 않음.
  console.log(githubRepository("javascript_study"));
  console.log(
    githubRepository("typescript_study", "typescript를 공부하는 스터디입니다.")
  );
}
