let initialLogin = {
  mail: 'admin',
  password: 'admin',
  isLogin: false,
};

export const reducers = (state = initialLogin, action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        ...state,
        isLogin: action.isLogin,
      };

    default:
      return state;
  }
};
