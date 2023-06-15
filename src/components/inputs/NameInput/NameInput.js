import "../Input.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import LanguageContext from "../../../context/language";
import { useRef, useEffect } from "react";

const NameInput = ({ onNameChange, focus = false }) => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  });
  const nameChangeHandler = (event) => {
    const inputName = event.target.value.trim();
    setName(inputName);
    onNameChange(inputName);
    let error;
    if (inputName.length === 0) {
      error = language === "ar" ? "اكتب اسمك!" : "Please enter your name!";
      setNameError(error);
    } else if (inputName.length < 5) {
      error =
        language === "ar"
          ? "اسمك يجب أن يكون مكون من 5 حروف على الأقل!"
          : "Your name must be at least 5 characters.";
      setNameError(error);
    } else {
      setNameError("");
    }
    onNameChange(inputName, error);
  };
  return (
    <Form.Group controlId="formName">
      <Form.Label>{language === "ar" ? "الاسم:" : "Name:"}</Form.Label>
      <div className="input-group">
        <Form.Control
          ref={inputRef}
          type="text"
          placeholder={language === "ar" ? "اكتب اسمك" : "Enter your name"}
          value={name}
          onChange={nameChangeHandler}
          className={nameError ? "is-invalid" : ""}
        />
        <FontAwesomeIcon icon={faUser} className="input-icon" />
        <div className="invalid-feedback">{nameError}</div>
      </div>
    </Form.Group>
  );
};
export default NameInput;
