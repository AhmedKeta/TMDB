import "../Input.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import LanguageContext from "../../../context/language";
import { useRef, useEffect } from "react";

const PasswordInput = ({ onPasswordChange, focus = false }) => {
  const { language } = useContext(LanguageContext);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  })
  const passwordChangeHandler = (event) => {
    const inputPassword = event.target.value.trim();
    setPassword(inputPassword);
    let error;
    if (inputPassword.length < 8) {
      error =
        language === "ar"
          ? " كلمة المرور يجب أن تكون مكونة من 8 أحرف على الأقل!"
          : "Your password must be at least 8 characters.";
      setPasswordError(error);
    } else {
      setPasswordError("");
    }
    onPasswordChange(inputPassword, error);
  };
  return (
    <Form.Group controlId="formPassword">
      <Form.Label>{language === "ar" ? "كلمة السر:" : "Password:"}</Form.Label>
      <div className="input-group">
        <Form.Control
          ref={inputRef}
          type="password"
          placeholder={
            language === "ar" ? "اكتب الباسوورد" : "Enter your password"
          }
          value={password}
          onChange={passwordChangeHandler}
          className={passwordError ? "is-invalid" : ""}
        />
        <FontAwesomeIcon icon={faLock} className="input-icon" />
        <div className="invalid-feedback">{passwordError}</div>
      </div>
    </Form.Group>
  );
};
export default PasswordInput;
