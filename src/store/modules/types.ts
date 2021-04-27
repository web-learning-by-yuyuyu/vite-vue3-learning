interface UserInfo {
  userName:string;
  sex:Sex;
  age:number;
  permission:string[],
  token:string,
}


enum Sex {
  MAN,
  WOMAN,
  UNKONW
}

export type userInfo = UserInfo