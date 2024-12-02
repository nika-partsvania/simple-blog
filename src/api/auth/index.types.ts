export type SignInPayload = {
  payload: { email: string; password: string };
};

export type SignUpPayload = {
  payload: {
    email: string;
    password: string;
    fullName: string;
  };
};
export type RefreshPayload = {
  payload: {
    refreshToken: string;
  };
};

export type MeResponse = {
  email: string;
  fullName: string;
};
