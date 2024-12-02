import { setAuthorizationHeader } from "@/api";

export const afterSignInSuccess = ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);

  setAuthorizationHeader(`Bearer ${accessToken}`);
};
