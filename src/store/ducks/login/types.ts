export enum LoginTypes {
  POST_LOGIN_REQUEST = '@login/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS = '@login/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILURE = '@login/POST_LOGIN_FAILURE',
}

export interface LoginUsers{
  id: number,
  email: string,
  password: string,
  name: string,
  role: string,
}

export interface LoginResponse {
  data: {
    accessToken: string;
  }
}