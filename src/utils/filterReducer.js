export const initialState = {
  page: 1,
  country: 'world',
  type: 'all',
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload,
      };

    case 'CHANGE_COUNTRY':
      return {
        ...state,
        page: 1,
        country: action.payload.toLowerCase(),
      };

    case 'CHANGE_TYPE':
      return {
        ...state,
        page: 1,
        type: action.payload,
      };

    default:
      return state;
  }
};
