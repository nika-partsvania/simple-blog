export const fakeLogin = () => {
  const loginResponse = {
    accessToken: crypto.randomUUID(),
  };

  return new Promise((res) => {
    setTimeout(() => {
      res(loginResponse);
    }, 500);
  });
};
