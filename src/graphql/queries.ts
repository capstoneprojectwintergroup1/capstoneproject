/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserRegistration = /* GraphQL */ `query GetUserRegistration($id: ID!) {
  getUserRegistration(id: $id) {
    id
    firstname
    lastname
    email
    phone
    username
    password
    Institution
    resume
    education
    skills
    UserJoinDate
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserRegistrationQueryVariables,
  APITypes.GetUserRegistrationQuery
>;
export const listUserRegistrations = /* GraphQL */ `query ListUserRegistrations(
  $filter: ModelUserRegistrationFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
      email
      phone
      username
      password
      Institution
      resume
      education
      skills
      UserJoinDate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserRegistrationsQueryVariables,
  APITypes.ListUserRegistrationsQuery
>;
