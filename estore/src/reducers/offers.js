import { GET_OFFERS } from "../actionTypes/offers";

export default function offersReducer(prevState = { offers: [] }, action) {
  console.log(
    `4-offersReducer - Action reaches reducer for a state change with action ${JSON.stringify(
      action
    )} and prevState ${JSON.stringify(prevState)}`
  );
  switch (action.type) {
    case GET_OFFERS:
      return {
        offers: [
          { id: 1, desc: "Buy 1 get 1" },
          { id: 2, desc: "Buy 1 get 20%" },
          { id: 3, desc: "Buy 3 get 30%" }
        ]
      };
    default:
      return prevState;
  }
}
