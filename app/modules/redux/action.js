export const saveUser = account => {
  return {
    type: 'SAVE',
    isLogin: account
  };
};

export const logUser = (mailInput, passwordInput) => {
  return {
    type: 'TODO',
    userMail: mailInput,
    userPassword: passwordInput
  }
}