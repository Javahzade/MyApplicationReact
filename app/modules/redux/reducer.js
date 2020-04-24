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
      case 'TODO':
        return {
          ...state,
          mail: action.userMail,
          password: action.userPassword
        }

    default:
      return state;
  }
};
