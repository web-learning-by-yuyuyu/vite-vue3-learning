interface UserInfo {
  username: string;
  permissions: string[];
  email: string;
  avater: string;
  token: string;
}

enum Sex {
  MAN,
  WOMAN,
  UNKONW,
}

export type userInfo = UserInfo;
