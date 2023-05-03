{
    // Rest parameter (spread)
    // 함수의 인자의 갯수가 정해지지 않았을 때

    function getAverage(...args: number[]): number {
        let avg = args.reduce(function (a, b) {
            return a + b;
          }) / args.length;
        
        return avg;
      }
        
      console.log(getAverage(10, 20, 30, 40, 50));  // 30
      console.log(getAverage(1.5, 3.5, 5.5, 7.5, 9.5))  // 5.5
      console.log(getAverage(2, 4, 6))  // 4
}