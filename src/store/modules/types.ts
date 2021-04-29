interface UserInfo {
  username: string;
  permissions: string[];
  email: string;
  avater: string;
  token: string;
  info:unknown
}

export type userInfo = UserInfo;
