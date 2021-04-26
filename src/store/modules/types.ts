interface UserInfo {
  userName:string;
  sex:Sex;
  age:number;
  permission:string[]
}


enum Sex {
  MAN,
  WOMAN,
  UNKONW
}

export type userInfo = UserInfo