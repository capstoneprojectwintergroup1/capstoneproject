/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserRegistrationInput = {
  id?: string | null,
  firstname: string,
  lastname: string,
  email: string,
  phone?: string | null,
  username: string,
  password: string,
  Institution?: Array< string | null > | null,
  resume: string,
  education?: Array< string | null > | null,
  skills?: Array< string | null > | null,
  UserJoinDate?: string | null,
};

export type ModelUserRegistrationConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  username?: ModelStringInput | null,
  password?: ModelStringInput | null,
  Institution?: ModelStringInput | null,
  resume?: ModelStringInput | null,
  education?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  UserJoinDate?: ModelStringInput | null,
  and?: Array< ModelUserRegistrationConditionInput | null > | null,
  or?: Array< ModelUserRegistrationConditionInput | null > | null,
  not?: ModelUserRegistrationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UserRegistration = {
  __typename: "UserRegistration",
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  phone?: string | null,
  username: string,
  password: string,
  Institution?: Array< string | null > | null,
  resume: string,
  education?: Array< string | null > | null,
  skills?: Array< string | null > | null,
  UserJoinDate?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserRegistrationInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  email?: string | null,
  phone?: string | null,
  username?: string | null,
  password?: string | null,
  Institution?: Array< string | null > | null,
  resume?: string | null,
  education?: Array< string | null > | null,
  skills?: Array< string | null > | null,
  UserJoinDate?: string | null,
};

export type DeleteUserRegistrationInput = {
  id: string,
};

export type ModelUserRegistrationFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  username?: ModelStringInput | null,
  password?: ModelStringInput | null,
  Institution?: ModelStringInput | null,
  resume?: ModelStringInput | null,
  education?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  UserJoinDate?: ModelStringInput | null,
  and?: Array< ModelUserRegistrationFilterInput | null > | null,
  or?: Array< ModelUserRegistrationFilterInput | null > | null,
  not?: ModelUserRegistrationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserRegistrationConnection = {
  __typename: "ModelUserRegistrationConnection",
  items:  Array<UserRegistration | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserRegistrationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  Institution?: ModelSubscriptionStringInput | null,
  resume?: ModelSubscriptionStringInput | null,
  education?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  UserJoinDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserRegistrationFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserRegistrationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserRegistrationMutationVariables = {
  input: CreateUserRegistrationInput,
  condition?: ModelUserRegistrationConditionInput | null,
};

export type CreateUserRegistrationMutation = {
  createUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserRegistrationMutationVariables = {
  input: UpdateUserRegistrationInput,
  condition?: ModelUserRegistrationConditionInput | null,
};

export type UpdateUserRegistrationMutation = {
  updateUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserRegistrationMutationVariables = {
  input: DeleteUserRegistrationInput,
  condition?: ModelUserRegistrationConditionInput | null,
};

export type DeleteUserRegistrationMutation = {
  deleteUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserRegistrationQueryVariables = {
  id: string,
};

export type GetUserRegistrationQuery = {
  getUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserRegistrationsQueryVariables = {
  filter?: ModelUserRegistrationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserRegistrationsQuery = {
  listUserRegistrations?:  {
    __typename: "ModelUserRegistrationConnection",
    items:  Array< {
      __typename: "UserRegistration",
      id: string,
      firstname: string,
      lastname: string,
      email: string,
      phone?: string | null,
      username: string,
      password: string,
      Institution?: Array< string | null > | null,
      resume: string,
      education?: Array< string | null > | null,
      skills?: Array< string | null > | null,
      UserJoinDate?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionUserRegistrationFilterInput | null,
};

export type OnCreateUserRegistrationSubscription = {
  onCreateUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionUserRegistrationFilterInput | null,
};

export type OnUpdateUserRegistrationSubscription = {
  onUpdateUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserRegistrationSubscriptionVariables = {
  filter?: ModelSubscriptionUserRegistrationFilterInput | null,
};

export type OnDeleteUserRegistrationSubscription = {
  onDeleteUserRegistration?:  {
    __typename: "UserRegistration",
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone?: string | null,
    username: string,
    password: string,
    Institution?: Array< string | null > | null,
    resume: string,
    education?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    UserJoinDate?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
