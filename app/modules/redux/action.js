export const saveUser = account => {
  ({
    type: 'SAVE',
    value1: account.mail,
    value2: account.password,
    value3: true,
  });
};
//?????