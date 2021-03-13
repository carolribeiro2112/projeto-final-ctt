export enum UsersTypes {
  GET_USERS_REQUEST = '@users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = '@users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = '@users/GET_USERS_FAILURE',

  POST_USERS_REQUEST = '@users/POST_USERS_REQUEST',
  POST_USERS_SUCCESS = '@users/POST_USERS_SUCCESS',
  POST_USERS_FAILURE = '@users/POST_USERS_FAILURE',

  DELETE_USERS_REQUEST = '@users/DELETE_USERS_REQUEST',
  DELETE_USERS_SUCCESS = '@users/DELETE_USERS_SUCCESS',
  DELETE_USERS_FAILURE = '@users/DELETE_USERS_FAILURE',
}

export interface Users {
  id: number,
  name: string,
  email: string,
  role: string,
  password: string,
  quantity: number,
}