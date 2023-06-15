import "../Input.css";
import { Form } from "react-bootstrap";
import { useContext, useState } from "react";
import LanguageContext from "../../../context/language";
import { useRef, useEffect } from "react";

const BirthdayInput = ({ onBirthdayChange, focus = false }) => {
  const { language } = useContext(LanguageContext);
  const [birthday, setBirthday] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  });
  const birthdayChangeHandler = (event) => {
    const inputBirthday = event.target.value;
    setBirthday(inputBirthday);

    const today = new Date();
    const selectedDate = new Date(inputBirthday);
    const age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    let error;
    if (age < 18 || (age === 18 && monthDiff < 0) || inputBirthday === "") {
      error =
        language === "ar"
          ? "يجب أن يكون عمرك أكبر من 18 عامَا!"
          : "You must be at least 18 years old.";
      setBirthdayError(error);
    } else {
      setBirthdayError("");
    }
    onBirthdayChange(inputBirthday, error);
  };
  return (
    <Form.Group controlId="formBirthday">
      <Form.Label>
        {language === "ar" ? "تاريخ الميلاد:" : "Birthday:"}
      </Form.Label>
      <div className="input-group">
        <Form.Control
          ref={inputRef}
          type="date"
          placeholder={
            language === "ar" ? "اختر تاريخ ميلادك" : "Enter your birthday"
          }
          value={birthday}
          onChange={birthdayChangeHandler}
          className={birthdayError ? "is-invalid" : ""}
        />
        <div className="invalid-feedback">{birthdayError}</div>
      </div>
    </Form.Group>
  );
};
export default BirthdayInput;
