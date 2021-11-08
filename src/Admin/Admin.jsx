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
// import "./Registration.css";
// import { DBMS } from "./DBMS";
// import { Details } from "./Details";
// import { CN } from "./Feedback/CN";
// import { TOC } from "./TOC";
// import { SA } from "./SA";
// import { TIS } from "./TIS";
// const stepPages = [
//   PersonalDetails,
//   JeeDetails,
//   FeeDetails,
//   Address,
//   Education,
//   Documents,
// ];
export const Admin = () => {
  // const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  // const [steps, setSteps] = React.useState([
  //   {
  //     label: "Personal Details",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "JEE Details",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Fee Details",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Address",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Education",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Documents",
  //     isValid: undefined,
  //   },
  // ]);

  const [correspondenceState, setCorrespondenceState] = React.useState("");
  // const [permanentState, setPermanentState] = React.useState("");

  // const lastStepIndex = steps.length - 1;
  // const isLastStep = lastStepIndex === step;
  const onStepSubmit = React.useCallback(
    (event) => {
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
                  <div className="head form-content-separator">Enter Teacher's Name and Course Name</div>
                  <Field
                    key={"teacher"}
                    id={"teacher"}
                    name={"teacher"}
                    label={"Teacher Name"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"course"}
                    id={"course"}
                    name={"course"}
                    label={"Course Name "}
                    component={FormInput}
                    // data={(function () {
                    //   const stateNames = [];
                    //   states.forEach((state) => {
                    //     stateNames.push(state.name);
                    //   });
                    //   return stateNames;
                    // })()}
                    // validator={requiredValidator}
                  />
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
                {/* <span
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Don't have an account? <Link to="/signup"> Sign Up</Link>
                </span> */}
                <div>
                  {/* {
                    <Button
                      style={{
                        marginRight: "16px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  } */}
                  <Button
                    primary={true}
                    // disabled={!formRenderProps.allowSubmit}
                    // onClick={formRenderProps.onSubmit}
                  >
                    Enter
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

export default Admin;
