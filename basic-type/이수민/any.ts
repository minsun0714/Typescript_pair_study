{
    // any
    // 어떠한 타입도 할당할 수 있다.

    // 명시적으로 any 타입 지정
    // any 유형이 설정되었으므로 어떤 유형도 값으로 할당 가능
    let color:any = 'rainbow';
    color = 7;

    // 암시적으로 any 타입 지정
    let color2;
    color2 = 12;
    color2 = 'rainbow';

    console.log(color); // 7
    console.log(color2); // rainbow
    console.log(typeof color); // number
    console.log(typeof color2); // string

    // 타입을 지정해 주지 않아 애매하므로 가능한 쓰지 않기
}