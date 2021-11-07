import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
// import { PersonalDetails } from "./PersonalDetails";
// import { JeeDetails } from "./JeeDetails";
// import { FeeDetails } from "./FeeDetails";
// import { Address } from "./Address";
// import { Education } from "./Education";
// import { Documents } from "./Documents";
import { Field } from "@progress/kendo-react-form";
import {
  FormInput,
  FormAutoComplete,
  FormRadioGroup,
  FormTextArea,
  FormDatePicker,
  FormDateInput,
  FormRating,
  FormNumericTextBox,
  FormDropDownTree,
  FormDropDownList,
  FormCheckbox,
} from "../Helpers/FormComponents";
import { nameValidator, requiredValidator } from "../Helpers/Validators";
import {
  category,
  countries,
  genders,
  minorityDetails,
  roundOfAllotment,
  yesNo,
  states,
  state_district,
} from "../Helpers/Data";
import { Link } from "react-router-dom";
import "./SignUp.css";
import apiCall from "./ApiCall";

export const SignUp = () => {
  // const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});

  const courses = [
    { code: 101, name: "DBMS" },
    { code: 102, name: "CN" },
    { code: 103, name: "TOC" },
    { code: 104, name: "SA" },
    { code: 105, name: "TIS" },
  ];

  const [correspondenceState, setCorrespondenceState] = React.useState("");
  // const [permanentState, setPermanentState] = React.useState("");

  // const lastStepIndex = steps.length - 1;
  // const isLastStep = lastStepIndex === step;
  const onStepSubmit = React.useCallback(
    async (event) => {
      const { isValid, values } = event;
      // const currentSteps = steps.map((currentStep, index) => ({
      //   ...currentStep,
      //   isValid: index === step ? isValid : currentStep.isValid,
      // }));
      // setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      // setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);
      // setCorrespondenceState(values.correspondenceState);
      // setPermanentState(values.permanentState);

      // if (isLastStep) {
      alert(JSON.stringify(values));
      // }
      // try {
      const data = JSON.stringify(values);
      const { username, password, year, semester, section } = data;
      const selectedCourses = [101, 102];
      // if (data.DBMS === true) {
      //   selectedCourses = [...selectedCourses, 101];
      // }
      // const url = "http://localhost:5000/api/register";
      // const payload = {
      //   user: {
      //     username: "BT21CSE001",
      //     password: "ashishpassword",
      //     year: 3,
      //     semester: 6,
      //     section: "A",
      //     courses: [101, 102],
      //   },
      // };
      // // const payload = JSON.stringify(values);
      // const res = await apiCall(url, payload);
      // if (!!res.error) {
      //   throw Error(res.error);
      // }
      // } catch (e) {
      //   throw e;
      // }
      // const response = await fetch("http://localhost:5000/api/register", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //     accept: "application/json",
      //   },
      //   body: JSON.stringify({
      //     user: {
      //       username: "BT21CSE001",
      //       password: "ashishpassword",
      //       year: 3,
      //       semester: 6,
      //       section: "A",
      //       courses: [101, 102],
      //     },
      //   }),
      // });
      // const jsonResponse = await response.json();
    }
    // [steps, isLastStep, step, lastStepIndex]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      // setStep(() => Math.max(step - 1, 0));
    }
    // [step, setStep]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ height: 50 }}></div>
      {/* <Stepper value={step} items={steps} /> */}
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <FormElement
              style={{
                width: 350,
              }}
            >
              {
                <div>
                  <div className="head form-content-separator">Sign Up</div>
                  <Field
                    key={"username"}
                    id={"username"}
                    name={"username"}
                    label={"Username"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"password"}
                    id={"password"}
                    name={"password"}
                    label={"Password"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"year"}
                    id={"year"}
                    name={"year"}
                    label={"Year"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"semester"}
                    id={"semester"}
                    name={"semester"}
                    label={"Semester"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"branch"}
                    id={"branch"}
                    name={"branch"}
                    label={"Branch"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"section"}
                    id={"section"}
                    name={"section"}
                    label={"Section"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                  <div className="courses_heading_signup">Courses Taken:</div>
                  {courses.map((ele) => {
                    const course = ele.name;
                    return (
                      <Field
                        key={course}
                        id={course}
                        name={course}
                        label={course}
                        component={FormCheckbox}
                        // validator={requiredValidator}
                      />
                    );
                  })}
                </div>
              }
              <span
                style={{
                  marginTop: "40px",
                }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={"k-form-buttons k-buttons-end"}
              >
                <span
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Already have an account? <Link to="/login"> Log In</Link>
                </span>
                <div>
                  <Button
                    primary={true}
                    // disabled={!formRenderProps.allowSubmit}
                    // onClick={formRenderProps.onSubmit}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};

export default SignUp;
