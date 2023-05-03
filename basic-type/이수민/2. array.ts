{
    // Array 
    // 한가지의 타입만 담을 수 있음

    // #1
    const animal: string[] = ['dog', 'cat', 'rabbit'];

    // #2
    const animal2: Array<string> = ['dog', 'cat', 'rabbit'];

    function arr(animal: readonly string[]){}
    // function arr2(animal: readonly Array<string>){}
    
    // readonly : 데이터 읽기 전용 , 내용 변경 불가, animal.push ❌
    // readonly를 작성할 경우엔 #1 을 이용해야 한다.
    // 코드를 일관성있게 작성하기 위해선 #1 방식을 사용하는 것이 좋다.

    let numbers = [1, 2, 3];
    let strings = ['Hello', 'World'];
    console.log(numbers, strings); // [1, 2, 3]['Hello', 'World']
}