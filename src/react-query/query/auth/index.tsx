import { setAuthorizationHeader } from "@/api";
import { me } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = ({
  isEnabled,
  accessToken,
}: {
  isEnabled: boolean;
  accessToken: string | null;
}) => {
  if (accessToken) {
    setAuthorizationHeader(`Bearer ${accessToken}`);
  }

  return useQuery({
    queryKey: ["me"],
    queryFn: me,
    retry: 0,
    gcTime: 1000 * 60 * 2,
    refetchOnWindowFocus: false,
    enabled: isEnabled,
  });
};
