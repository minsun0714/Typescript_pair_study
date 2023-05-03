{
    // unknown
    // 할당된 값이 어떤 타입인지 모름
    let variable: unknown

    variable = true // OK (boolean)
    variable = 1 // OK (number)
    variable = 'string' // OK (string)
    variable = {} // OK (object)

    //any를 제외한 다른 타입으로 선언된 변수에 할당될 수 없다

    let variable2: unknown

    let anyType: any = variable2
    let booleanType: boolean = variable2  // Error
    let numberType: number = variable2 //  Error
    let stringType: string = variable2 //  Error
    let objectType: object = variable2 //  Error
}