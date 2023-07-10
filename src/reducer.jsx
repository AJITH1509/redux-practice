export const initialState = {
  loading: true,
  count: 0,
  data: null,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state };
    case "data":
      return { ...state, loading: false, data: action.payload };
    case "increment":
      return { ...state, count: state.count + 1 };
  }
};
