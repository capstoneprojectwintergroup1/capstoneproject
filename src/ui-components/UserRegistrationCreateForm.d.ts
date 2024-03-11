/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UserRegistrationCreateFormInputValues = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
    username?: string;
    password?: string;
};
export declare type UserRegistrationCreateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserRegistrationCreateFormOverridesProps = {
    UserRegistrationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type UserRegistrationCreateFormProps = React.PropsWithChildren<{
    overrides?: UserRegistrationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserRegistrationCreateFormInputValues) => UserRegistrationCreateFormInputValues;
    onSuccess?: (fields: UserRegistrationCreateFormInputValues) => void;
    onError?: (fields: UserRegistrationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserRegistrationCreateFormInputValues) => UserRegistrationCreateFormInputValues;
    onValidate?: UserRegistrationCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserRegistrationCreateForm(props: UserRegistrationCreateFormProps): React.ReactElement;
