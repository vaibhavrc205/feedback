import * as React from "react";
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
  FormUpload,
} from "../Helpers/FormComponents";
import { nameValidator, requiredValidator } from "../Helpers/Validators";
import {
  category,
  countries,
  genders,
  minorityDetails,
  roundOfAllotment,
  yesNo,
} from "../Helpers/Data";
import "./Registration.css";
export const Documents = (
  <div>
    <div className="form-content-separator"></div>
    <Field
      key={"seatAllotmentLetter"}
      id={"seatAllotmentLetter"}
      name={"seatAllotmentLetter"}
      label={"Seat Allotment Letter"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"jeeRankCard"}
      id={"jeeRankCard"}
      name={"jeeRankCard"}
      label={"JEE Rank Card"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"photoIdProof"}
      id={"photoIdProof"}
      name={"photoIdProof"}
      label={"Photo ID Proof"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"dobProof"}
      id={"dobProof"}
      name={"dobProof"}
      label={"DOB Proof"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"incomeCertificate"}
      id={"incomeCertificate"}
      name={"incomeCertificate"}
      label={"Income Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"aadharCard"}
      id={"aadharCard"}
      name={"aadharCard"}
      label={"Aadhar Card"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"casteCertificate"}
      id={"casteCertificate"}
      name={"casteCertificate"}
      label={"Caste Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"casteValidity"}
      id={"casteValidity"}
      name={"casteValidity"}
      label={"Caste Validity"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"obcNclCertificate"}
      id={"obcNclCertificate"}
      name={"obcNclCertificate"}
      label={"OBC NCL Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"disabilityCertificate"}
      id={"disabilityCertificate"}
      name={"disabilityCertificate"}
      label={"Disability Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"transferCertificate"}
      id={"transferCertificate"}
      name={"transferCertificate"}
      label={"Transfer Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"migrationCertificate"}
      id={"migrationCertificate"}
      name={"migrationCertificate"}
      label={"Migration Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
    <Field
      key={"gapCertificate"}
      id={"gapCertificate"}
      name={"gapCertificate"}
      label={"Gap Certificate"}
      component={FormUpload}
      // validator={nameValidator}
    />
  </div>
);
