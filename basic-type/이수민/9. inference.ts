{
    // Type Inference 타입 추론
    // = 명시적으로 타입을 지정해주지 않고 자동으로 타입이 결정되는 경우
  
    let day = 13; //따로 타입을 명시하지 않아도 타입이 지정됨
    // 타입이 단순한 경우 생략해서 작성해도 괜찮음

    // Best Common Type
    let arr = [0, 9, 'a', null];
  
    arr[0] = true;
    arr[1] = null;


    let cat = {
        name: 'NaVi',
        furColor: 'white',
        weight: 3.8,
    };

    
    function add(x: number, y: number) {
      return x * y; 
    }
    const result = add(2, 6);
    console.log(result);   //12

    
    // 사용하지 않는게 좋음
    // 간단한 코드 이외에 복잡한 코드를 작성할 때에는 타입을 명시해 주는게 좋다
  }