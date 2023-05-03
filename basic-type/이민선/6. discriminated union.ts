{
  /**
   * union과 discriminated union의 차이
   * 객체들 간에 공통된 property가 있고, 그 공통된 property의 값을 기준으로 조건을 분기할 때 유용하게 사용됩니다.
   */

  interface FlightBooking {
    payload: {
      id: number;
      name: string;
      destination: "Incheon" | "Beijing" | "Osaka";
    };
  }

  interface Add {
    type: "ADD";
    payload: FlightBooking;
  }

  interface Delete {
    type: "DELETE";
    payload: {
      id: number;
    };
  }

  // Redux의 reducer에서도 action 객체의 property가 모두 다르더라도, type이라는 공통 property를 가지고 분기할 수 있다.
  const reducer = (
    flightBookingState: FlightBooking[] = [],
    // Add와 Delete의 property가 다르지만, type이라는 공통 property를 기준으로 분기함
    action: Add | Delete
  ): FlightBooking[] => {
    // action들의 공통 property인 action.type을 기준으로 분기함
    switch (action.type) {
      case "ADD":
        return [...flightBookingState, action.payload];
      case "DELETE":
        return flightBookingState.filter(
          (book) => book.payload.id !== action.payload.id
        );
      default:
        return flightBookingState;
    }
  };
}
