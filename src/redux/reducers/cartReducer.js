import {
  ADD_ITEM,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_ITEM,
  CLEAR_CART,
} from "../actions/cartActions";

const initialState = { items: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
        };
      }

    case INCREMENT_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case DECREMENT_QTY:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, qty: item.qty - 1 }
              : item
          )
          .filter((item) => item.qty > 0),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload
        ),
      };

    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default cartReducer;
