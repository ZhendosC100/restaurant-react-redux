const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: payload.map(item => ({
            ...item,
            counter: 0
          })),
          loading: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'ITEM_ADD_TO_CART':
      const id = payload;

      return {
        ...state,
        menu: state.menu.map(item => {
            if (item.id === id) {
              return {
                ...item,
                counter: item.counter + 1,

              }
            }
            return item
          }),

      };

    case 'ITEM_REMOVE_FROM_CART':
      return {
        ...state,

        menu: state.menu.map(item => {
          if (item.id === payload) {
            return {
              ...item,
              counter: item.counter - 1
            }
          }
          return item
        })
      }
      case 'MENU_ERROR':
        return {
          ...state,
          menu: state.menu,
            loading: false,
            error: true
        };
      default:
        return state;
  }
}

export default reducer;