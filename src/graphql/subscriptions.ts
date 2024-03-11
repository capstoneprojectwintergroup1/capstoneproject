/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserRegistration = /* GraphQL */ `subscription OnCreateUserRegistration(
  $filter: ModelSubscriptionUserRegistrationFilterInput
) {
  onCreateUserRegistration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserRegistrationSubscriptionVariables,
  APITypes.OnCreateUserRegistrationSubscription
>;
export const onUpdateUserRegistration = /* GraphQL */ `subscription OnUpdateUserRegistration(
  $filter: ModelSubscriptionUserRegistrationFilterInput
) {
  onUpdateUserRegistration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserRegistrationSubscriptionVariables,
  APITypes.OnUpdateUserRegistrationSubscription
>;
export const onDeleteUserRegistration = /* GraphQL */ `subscription OnDeleteUserRegistration(
  $filter: ModelSubscriptionUserRegistrationFilterInput
) {
  onDeleteUserRegistration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserRegistrationSubscriptionVariables,
  APITypes.OnDeleteUserRegistrationSubscription
>;
