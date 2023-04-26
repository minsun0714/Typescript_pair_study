{
  /**
   * object type이 권장되지 않는 이유
   * 원시 타입을 제외한 모든 object type을 할당 가능하다. 심지어 배열도 할당 가능
   * key/value도 임의로 설정 가능하다.
   */

  function lunchMenu(menus: object): object {
    return menus;
  }
  // 객체도 인자로 전달할 수 있고
  console.log(lunchMenu({ mainMenu: "rice", subMenu: "kimchi" }));
  // 배열도 인자로 전달 가능하다.
  console.log(lunchMenu(["rice", "kimchi"]));
}
