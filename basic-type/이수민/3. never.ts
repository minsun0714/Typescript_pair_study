{
    // never
    // 함수의 리턴 타입으로 사용
    // 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미

    //오류 출력
    function invalid(message:string): never {
        throw new Error(message);
      }

    //무한 루프
    function infiniteAnimate(): never {
    while ( true ) {}
    }
}