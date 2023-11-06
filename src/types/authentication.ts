export type UserData = {
  node_id: string;
  name: string;
  mail_address: string | null | undefined;
};

export type TokenData = {
  accessToken: string;
  refreshToken: string | null | undefined;
};

export type AuthenticationData = {
  userData: UserData;
  tokenData: TokenData;
};
