/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserRegistration } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserRegistrationUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    username?: string;
    password?: string;
    Institution?: string[];
    resume?: string;
    education?: string[];
    skills?: string[];
    UserJoinDate?: string;
};
export declare type UserRegistrationUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    Institution?: ValidationFunction<string>;
    resume?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    UserJoinDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRegistrationUpdateFormOverridesProps = {
    UserRegistrationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    Institution?: PrimitiveOverrideProps<TextFieldProps>;
    resume?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextAreaFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
    UserJoinDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserRegistrationUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserRegistrationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userRegistration?: UserRegistration;
    onSubmit?: (fields: UserRegistrationUpdateFormInputValues) => UserRegistrationUpdateFormInputValues;
    onSuccess?: (fields: UserRegistrationUpdateFormInputValues) => void;
    onError?: (fields: UserRegistrationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRegistrationUpdateFormInputValues) => UserRegistrationUpdateFormInputValues;
    onValidate?: UserRegistrationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserRegistrationUpdateForm(props: UserRegistrationUpdateFormProps): React.ReactElement;
