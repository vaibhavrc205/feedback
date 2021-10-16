import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import {
  FormInput,
  FormAutoComplete,
  FormRadioGroup,
  FormTextArea,
} from "./FormComponents";
import { nameValidator, requiredValidator } from "./Validators";
import { countries, genders } from "./Data";
export const Details = (
  <div>
    <Field
      key={"academicYear"}
      id={"academicYear"}
      name={"academicYear"}
      label={"Academic Year"}
      component={FormInput}
      // validator={nameValidator}
    />
    <Field
      key={"semester"}
      id={"semester"}
      name={"semester"}
      label={"Semester"}
      // hint={"Hint: Only European countries"}
      component={FormInput}
      // data={countries}
      validator={requiredValidator}
    />
    <Field
      key={"branch"}
      id={"branch"}
      name={"branch"}
      label={"Branch"}
      layout={"horizontal"}
      component={FormInput}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"section"}
      id={"section"}
      name={"section"}
      label={"Section"}
      // optional={true}
      component={FormInput}
    />
  </div>
);
