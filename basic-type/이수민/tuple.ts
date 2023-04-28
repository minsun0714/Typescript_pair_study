{
    // Tuple 
    // 서로 다른 타입의 데이터 입력 가능
    // interface, type alias, class 로 대체해서 사용
    // 사용 예시 : react => useState() 
    // 동적으로 사용하는 경우 사용
    let book: [string, number];
    book = ['Le Petit Prince', 12000]
    book[0] // Le Petit Prince
    book[1] // 12000

    const [title, price] = book;
    // book의 배열 첫번째 값이 title에 할당, 두번째 값이 price에 할당


    // 생략 가능
    const tupleArray = ['A', 'HI', 123, true];  // stirng, string, number, boolean


    type rgb = number | string;

    let rgbColor1: [rgb, rgb, rgb] = [255, 255, 0];
    let rgbColor2: [rgb, rgb, rgb] = ['FF', 'FF', '00'];
}