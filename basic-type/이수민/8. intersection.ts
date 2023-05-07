{
 // Intersection
 // Union과 비슷하지만 Union은 발생할 수 있는 모든 케이스 중 한가지만 선택 = or
 // Intersection 그 모든것을 다 합한 = &
 // 다양한 타입들을 하나로 묶어서 사용 가능

  type Information1 = {
    name: string;
    age: number;
  }

  type Information2 = {
    hobby: string[];
    job: string;
  }

  type Person = Information1 & Information2;

  let girl : Person = {
    name: 'Amy',
    age: 12,
    hobby: ['watching movie', 'running', 'cooking'],
    job: 'developer',
  }
  
}