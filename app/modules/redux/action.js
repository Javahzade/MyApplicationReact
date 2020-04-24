export const saveUser = account => {
  return {
    type: 'SAVE',
    isLogin: account
  };
};
