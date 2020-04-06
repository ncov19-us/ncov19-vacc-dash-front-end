export const initialState = {
  page: 1,
  country: 'Global',
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
      return state;

    case 'CHANGE_TYPE':
      return state;

    default:
      return state;
  }
};
