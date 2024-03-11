/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserRegistration = /* GraphQL */ `mutation CreateUserRegistration(
  $input: CreateUserRegistrationInput!
  $condition: ModelUserRegistrationConditionInput
) {
  createUserRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserRegistrationMutationVariables,
  APITypes.CreateUserRegistrationMutation
>;
export const updateUserRegistration = /* GraphQL */ `mutation UpdateUserRegistration(
  $input: UpdateUserRegistrationInput!
  $condition: ModelUserRegistrationConditionInput
) {
  updateUserRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserRegistrationMutationVariables,
  APITypes.UpdateUserRegistrationMutation
>;
export const deleteUserRegistration = /* GraphQL */ `mutation DeleteUserRegistration(
  $input: DeleteUserRegistrationInput!
  $condition: ModelUserRegistrationConditionInput
) {
  deleteUserRegistration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserRegistrationMutationVariables,
  APITypes.DeleteUserRegistrationMutation
>;
