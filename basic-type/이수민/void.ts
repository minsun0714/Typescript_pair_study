{
    // void
    // 텅텅 빈, 함수에서 아무것도 리턴하지 않는
    // 변수에는 사용❌ undefined 만 할당할 수 있음

    function addNum(num :number) :void { 
        return num * 2  // 에러 발생
      } 

    function addNum2(num :number) :void { 
        console.log('10') // 출력만 가능
    } 
}