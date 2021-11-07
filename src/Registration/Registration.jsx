import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import { PersonalDetails } from "./PersonalDetails";
import { JeeDetails } from "./JeeDetails";
import { FeeDetails } from "./FeeDetails";
import { Address } from "./Address";
import { Education } from "./Education";
import { Documents } from "./Documents";
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
import "./Registration.css";
import apiCall from "../Registration/ApiCall";
// import { DBMS } from "./DBMS";
// import { Details } from "./Details";
// import { CN } from "./Feedback/CN";
// import { TOC } from "./TOC";
// import { SA } from "./SA";
// import { TIS } from "./TIS";
const stepPages = [
  PersonalDetails,
  JeeDetails,
  FeeDetails,
  Address,
  Education,
  Documents,
];
export const Registration = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    {
      label: "Personal Details",
      isValid: undefined,
    },
    {
      label: "JEE Details",
      isValid: undefined,
    },
    {
      label: "Fee Details",
      isValid: undefined,
    },
    {
      label: "Address",
      isValid: undefined,
    },
    {
      label: "Education",
      isValid: undefined,
    },
    {
      label: "Documents",
      isValid: undefined,
    },
  ]);

  const [correspondenceState, setCorrespondenceState] = React.useState("");
  // const [permanentState, setPermanentState] = React.useState("");

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const onStepSubmit = React.useCallback(
    async (event) => {
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);
      setCorrespondenceState(values.correspondenceState);
      // setPermanentState(values.permanentState);

      if (isLastStep) {
        alert(JSON.stringify(values));
        // const response = await fetch("http://localhost:5000/api/newAdmission", {
        //   method: "POST",
        //   headers: {
        //     // "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        //     // "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        //     "content-type": "application/json",
        //     accept: "application/json",
        //   },
        //   body: JSON.stringify({}),
        // });
        // const jsonResponse = await response.json();
      }
    },
    [steps, isLastStep, step, lastStepIndex]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
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
      <Stepper value={step} items={steps} />
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
                width: 400,
              }}
            >
              {step == 3 ? (
                <div>
                  <div className="head form-content-separator">
                    Correspondence
                  </div>
                  <Field
                    key={"correspondenceStreet"}
                    id={"correspondenceStreet"}
                    name={"correspondenceStreet"}
                    label={"Street"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"correspondenceState"}
                    id={"correspondenceState"}
                    name={"correspondenceState"}
                    label={"State"}
                    component={FormDropDownList}
                    data={(function () {
                      const stateNames = [];
                      states.forEach((state) => {
                        stateNames.push(state.name);
                      });
                      return stateNames;
                    })()}
                    // validator={requiredValidator}
                  />

                  <Field
                    key={"correspondenceCity"}
                    id={"correspondenceCity"}
                    name={"correspondenceCity"}
                    label={"City"}
                    component={FormDropDownList}
                    data={(function () {
                      if (
                        formRenderProps.valueGetter("correspondenceState") ===
                        undefined
                      ) {
                        return [];
                      }
                      const stateInfo = state_district.find(
                        (elem) =>
                          elem.state ==
                          formRenderProps.valueGetter("correspondenceState")
                      );
                      return stateInfo.districts;
                    })()}
                  />
                  <Field
                    key={"correspondencePincode"}
                    id={"correspondencePincode"}
                    name={"correspondencePincode"}
                    label={"PINCODE"}
                    component={FormInput}
                  />
                  <div className="head form-content-separator">Permanent</div>
                  <Field
                    key={"permanentStreet"}
                    id={"permanentStreet"}
                    name={"permanentStreet"}
                    label={"Street"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"permanentState"}
                    id={"permanentState"}
                    name={"permanentState"}
                    label={"State"}
                    component={FormDropDownList}
                    data={(function () {
                      const stateNames = [];
                      states.forEach((state) => {
                        stateNames.push(state.name);
                      });
                      return stateNames;
                    })()}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"permanentCity"}
                    id={"permanentCity"}
                    name={"permanentCity"}
                    label={"City"}
                    component={FormDropDownList}
                    // data={}
                    // data={roundOfAllotment}
                    data={(function () {
                      if (
                        formRenderProps.valueGetter("permanentState") ===
                        undefined
                      ) {
                        return [];
                      }
                      const stateInfo = state_district.find(
                        (elem) =>
                          elem.state ==
                          formRenderProps.valueGetter("permanentState")
                      );
                      return stateInfo.districts;
                    })()}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"permanentPincode"}
                    id={"permanentPincode"}
                    name={"permanentPincode"}
                    label={"PINCODE"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                </div>
              ) : (
                stepPages[step]
              )}
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
                  Step {step + 1} of 6
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{
                        marginRight: "16px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    primary={true}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? "Submit" : "Next"}
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

export default Registration;
