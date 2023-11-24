export type UserData = {
  nodeId: string;
  name: string;
  mailAddress: string | null | undefined;
};

export type TokenData = {
  accessToken: string;
  refreshToken: string | null | undefined;
};

export type AuthenticationData = {
  userData: UserData;
  tokenData: TokenData;
};
