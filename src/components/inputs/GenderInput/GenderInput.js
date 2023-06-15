import "../Input.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import LanguageContext from "../../../context/language";
import { useRef, useEffect } from "react";

const GenderInput = ({ onGenderChange, focus = false }) => {
  const { language } = useContext(LanguageContext);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  });
  const genderChangeHandler = (event) => {
    const inputGender = event.target.value;
    setGender(inputGender);
    let error;
    if (inputGender === "male" || inputGender === "female") {
      setGenderError("");
    } else {
      error = language === "ar" ? "اختر جنسك!" : "Please enter your gender!";
      setGenderError(error);
    }
    onGenderChange(inputGender, error);
  };
  return (
    <Form.Group controlId="formGender">
      <Form.Label>{language === "ar" ? "الجنس:" : "Gender:"}</Form.Label>
      <div className="input-group">
        <Form.Control
          ref={inputRef}
          as="select"
          value={gender}
          onChange={genderChangeHandler}
          className={genderError ? "is-invalid" : ""}>
          <option>{language === "ar" ? "اختر" : "Select your gender"}</option>
          <option value="male">{language === "ar" ? "ذكر" : "Male"}</option>
          <option value="female">
            {language === "ar" ? "انثى" : "Female"}
          </option>
        </Form.Control>
        <FontAwesomeIcon icon={faVenusMars} className="input-icon" />
        <div className="invalid-feedback">{genderError}</div>
      </div>
    </Form.Group>
  );
};
export default GenderInput;
