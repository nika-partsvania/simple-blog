import { httpClient } from "@/api";
import { AUTH_ENDPOINTS } from "@/api/auth/index.enum";
import {
  MeResponse,
  RefreshPayload,
  SignInPayload,
  SignUpPayload,
} from "@/api/auth/index.types";

export const signIn = ({ payload }: SignInPayload) => {
  return httpClient
    .post(AUTH_ENDPOINTS.SIGN_IN, payload)
    .then((res) => res.data);
};

export const signUp = ({ payload }: SignUpPayload) => {
  return httpClient
    .post(AUTH_ENDPOINTS.SIGN_UP, payload)
    .then((res) => res.data);
};

export const signOut = () => {
  return httpClient.post(AUTH_ENDPOINTS.SIGN_OUT).then((res) => res.data);
};

export const refresh = ({ payload }: RefreshPayload) => {
  return httpClient
    .post(AUTH_ENDPOINTS.REFRESH, payload)
    .then((res) => res.data);
};

export const me = () => {
  return httpClient.get<MeResponse>(AUTH_ENDPOINTS.ME).then((res) => res.data);
};
