/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getUserRegistration } from "../graphql/queries";
import { updateUserRegistration } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserRegistrationUpdateForm(props) {
  const {
    id: idProp,
    userRegistration: userRegistrationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    Institution: [],
    resume: "",
    education: [],
    skills: [],
    UserJoinDate: "",
  };
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [lastname, setLastname] = React.useState(initialValues.lastname);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [username, setUsername] = React.useState(initialValues.username);
  const [password, setPassword] = React.useState(initialValues.password);
  const [Institution, setInstitution] = React.useState(
    initialValues.Institution
  );
  const [resume, setResume] = React.useState(initialValues.resume);
  const [education, setEducation] = React.useState(initialValues.education);
  const [skills, setSkills] = React.useState(initialValues.skills);
  const [UserJoinDate, setUserJoinDate] = React.useState(
    initialValues.UserJoinDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRegistrationRecord
      ? { ...initialValues, ...userRegistrationRecord }
      : initialValues;
    setFirstname(cleanValues.firstname);
    setLastname(cleanValues.lastname);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setUsername(cleanValues.username);
    setPassword(cleanValues.password);
    setInstitution(cleanValues.Institution ?? []);
    setCurrentInstitutionValue("");
    setResume(cleanValues.resume);
    setEducation(cleanValues.education ?? []);
    setCurrentEducationValue("");
    setSkills(cleanValues.skills ?? []);
    setCurrentSkillsValue("");
    setUserJoinDate(cleanValues.UserJoinDate);
    setErrors({});
  };
  const [userRegistrationRecord, setUserRegistrationRecord] = React.useState(
    userRegistrationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getUserRegistration.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserRegistration
        : userRegistrationModelProp;
      setUserRegistrationRecord(record);
    };
    queryData();
  }, [idProp, userRegistrationModelProp]);
  React.useEffect(resetStateValues, [userRegistrationRecord]);
  const [currentInstitutionValue, setCurrentInstitutionValue] =
    React.useState("");
  const InstitutionRef = React.createRef();
  const [currentEducationValue, setCurrentEducationValue] = React.useState("");
  const educationRef = React.createRef();
  const [currentSkillsValue, setCurrentSkillsValue] = React.useState("");
  const skillsRef = React.createRef();
  const validations = {
    firstname: [{ type: "Required" }],
    lastname: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    phone: [{ type: "Phone" }],
    username: [{ type: "Required" }],
    password: [{ type: "Required" }],
    Institution: [],
    resume: [{ type: "Required" }, { type: "URL" }],
    education: [{ type: "JSON" }],
    skills: [],
    UserJoinDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstname,
          lastname,
          email,
          phone: phone ?? null,
          username,
          password,
          Institution: Institution ?? null,
          resume,
          education: education ?? null,
          skills: skills ?? null,
          UserJoinDate: UserJoinDate ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateUserRegistration.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userRegistrationRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserRegistrationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Firstname"
        isRequired={true}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname: value,
              lastname,
              email,
              phone,
              username,
              password,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Lastname"
        isRequired={true}
        isReadOnly={false}
        value={lastname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname: value,
              email,
              phone,
              username,
              password,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.lastname ?? value;
          }
          if (errors.lastname?.hasError) {
            runValidationTasks("lastname", value);
          }
          setLastname(value);
        }}
        onBlur={() => runValidationTasks("lastname", lastname)}
        errorMessage={errors.lastname?.errorMessage}
        hasError={errors.lastname?.hasError}
        {...getOverrideProps(overrides, "lastname")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email: value,
              phone,
              username,
              password,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone: value,
              username,
              password,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username: value,
              password,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username,
              password: value,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username,
              password,
              Institution: values,
              resume,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            values = result?.Institution ?? values;
          }
          setInstitution(values);
          setCurrentInstitutionValue("");
        }}
        currentFieldValue={currentInstitutionValue}
        label={"Institution"}
        items={Institution}
        hasError={errors?.Institution?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Institution", currentInstitutionValue)
        }
        errorMessage={errors?.Institution?.errorMessage}
        setFieldValue={setCurrentInstitutionValue}
        inputFieldRef={InstitutionRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Institution"
          isRequired={false}
          isReadOnly={false}
          value={currentInstitutionValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Institution?.hasError) {
              runValidationTasks("Institution", value);
            }
            setCurrentInstitutionValue(value);
          }}
          onBlur={() =>
            runValidationTasks("Institution", currentInstitutionValue)
          }
          errorMessage={errors.Institution?.errorMessage}
          hasError={errors.Institution?.hasError}
          ref={InstitutionRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Institution")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Resume"
        isRequired={true}
        isReadOnly={false}
        value={resume}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username,
              password,
              Institution,
              resume: value,
              education,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            value = result?.resume ?? value;
          }
          if (errors.resume?.hasError) {
            runValidationTasks("resume", value);
          }
          setResume(value);
        }}
        onBlur={() => runValidationTasks("resume", resume)}
        errorMessage={errors.resume?.errorMessage}
        hasError={errors.resume?.hasError}
        {...getOverrideProps(overrides, "resume")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username,
              password,
              Institution,
              resume,
              education: values,
              skills,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            values = result?.education ?? values;
          }
          setEducation(values);
          setCurrentEducationValue("");
        }}
        currentFieldValue={currentEducationValue}
        label={"Education"}
        items={education}
        hasError={errors?.education?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("education", currentEducationValue)
        }
        errorMessage={errors?.education?.errorMessage}
        setFieldValue={setCurrentEducationValue}
        inputFieldRef={educationRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Education"
          isRequired={false}
          isReadOnly={false}
          value={currentEducationValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.education?.hasError) {
              runValidationTasks("education", value);
            }
            setCurrentEducationValue(value);
          }}
          onBlur={() => runValidationTasks("education", currentEducationValue)}
          errorMessage={errors.education?.errorMessage}
          hasError={errors.education?.hasError}
          ref={educationRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "education")}
        ></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username,
              password,
              Institution,
              resume,
              education,
              skills: values,
              UserJoinDate,
            };
            const result = onChange(modelFields);
            values = result?.skills ?? values;
          }
          setSkills(values);
          setCurrentSkillsValue("");
        }}
        currentFieldValue={currentSkillsValue}
        label={"Skills"}
        items={skills}
        hasError={errors?.skills?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("skills", currentSkillsValue)
        }
        errorMessage={errors?.skills?.errorMessage}
        setFieldValue={setCurrentSkillsValue}
        inputFieldRef={skillsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Skills"
          isRequired={false}
          isReadOnly={false}
          value={currentSkillsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.skills?.hasError) {
              runValidationTasks("skills", value);
            }
            setCurrentSkillsValue(value);
          }}
          onBlur={() => runValidationTasks("skills", currentSkillsValue)}
          errorMessage={errors.skills?.errorMessage}
          hasError={errors.skills?.hasError}
          ref={skillsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "skills")}
        ></TextField>
      </ArrayField>
      <TextField
        label="User join date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={UserJoinDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              email,
              phone,
              username,
              password,
              Institution,
              resume,
              education,
              skills,
              UserJoinDate: value,
            };
            const result = onChange(modelFields);
            value = result?.UserJoinDate ?? value;
          }
          if (errors.UserJoinDate?.hasError) {
            runValidationTasks("UserJoinDate", value);
          }
          setUserJoinDate(value);
        }}
        onBlur={() => runValidationTasks("UserJoinDate", UserJoinDate)}
        errorMessage={errors.UserJoinDate?.errorMessage}
        hasError={errors.UserJoinDate?.hasError}
        {...getOverrideProps(overrides, "UserJoinDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userRegistrationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userRegistrationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
