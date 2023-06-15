import "../Input.css";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import LanguageContext from "../../../context/language";
import { useRef, useEffect } from "react";

const EmailInput = ({ onEmailChange, focus = false }) => {
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  });
  const emailChangeHandler = (event) => {
    const inputEmail = event.target.value.trim();
    setEmail(inputEmail);

    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    let error;

    if (inputEmail === "") {
      error =
        language === "ar"
          ? "اكتب بريدك الالكترونى!"
          : "Please enter your email!";
      setEmailError(error);
    } else if (!inputEmail.match(emailRegex)) {
      let error =
        language === "ar"
          ? "اكتب عنوان بريد الكترونى حقيقى!"
          : "Please enter a valid email address.";
      setEmailError(error);
    } else {
      setEmailError("");
    }
    onEmailChange(inputEmail);
  };
  return (
    <Form.Group controlId="formEmail">
      <Form.Label>
        {language === "ar" ? "البريد الالكترونى:" : "Email address:"}
      </Form.Label>
      <div className="input-group">
        <Form.Control
          ref={inputRef}
          type="email"
          placeholder={
            language === "ar"
              ? "اكتب عنوان بريدك الالكترونى"
              : "Enter your email"
          }
          value={email}
          onChange={emailChangeHandler}
          className={emailError ? "is-invalid" : ""}
        />
        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
        <div className="invalid-feedback">{emailError}</div>
      </div>
    </Form.Group>
  );
};
export default EmailInput;
