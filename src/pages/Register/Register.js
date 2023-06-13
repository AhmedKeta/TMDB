import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faVenusMars,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "./Register.css";
import ErrorModal from "../../components/common/ErrorModal/ErrorModal";
import LanguageContext from "../../context/language";
const Register = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState(" ");
  const [emailError, setEmailError] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthdayError, setBirthdayError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { language } = useContext(LanguageContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = [];
    if (!name)
      setNameError(
        language === "ar" ? "اكتب اسمك!" : "Please enter your name!"
      );
    if (!email)
      setEmailError(
        language === "ar"
          ? "اكتب بريدك الالكترونى!"
          : "Please enter your email!"
      );
    if (!birthday)
      setBirthdayError(
        language === "ar" ? "اختر تاريخ ميلادك!" : "Please enter your birthday!"
      );
    if (!gender)
      setGenderError(
        language === "ar" ? "اختر جنسك!" : "Please enter your gender!"
      );
    if (!password)
      setPasswordError(
        language === "ar" ? "اكتب كلمة المرور!" : "Please enter your password!"
      );

    if (nameError) errors.push(nameError);
    if (emailError) errors.push(emailError);
    if (birthdayError) errors.push(birthdayError);
    if (genderError) errors.push(genderError);
    if (passwordError) errors.push(passwordError);
    if (!name || !email || !birthday || !gender || !password) errors.push("!!");
    if (errors.length > 0) {
      setShowErrorModal(true);
    } else {
      console.log({ name, email, birthday, gender, password });
    }
  };

  const nameChangeHandler = (event) => {
    const inputName = event.target.value.trim();
    setName(inputName);

    if (inputName.length === 0) {
      setNameError(
        language === "ar" ? "اكتب اسمك!" : "Please enter your name!"
      );
    } else if (inputName.length < 5) {
      setNameError(
        language === "ar"
          ? "اسمك يجب أن يكون مكون من 5 حروف على الأقل!"
          : "Your name must be at least 5 characters."
      );
    } else {
      setNameError("");
    }
  };

  const emailChangeHandler = (event) => {
    const inputEmail = event.target.value.trim();
    setEmail(inputEmail);

    const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

    if (inputEmail === "") {
      setEmailError(
        language === "ar"
          ? "اكتب بريدك الالكترونى!"
          : "Please enter your email!"
      );
    } else if (!inputEmail.match(emailRegex)) {
      setEmailError(
        language === "ar"
          ? "اكتب عنوان بريد الكترونى حقيقى!"
          : "Please enter a valid email address."
      );
    } else {
      setEmailError("");
    }
  };

  const birthdayChangeHandler = (event) => {
    const inputBirthday = event.target.value;
    setBirthday(inputBirthday);

    const today = new Date();
    const selectedDate = new Date(inputBirthday);
    const age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();

    if (age < 18 || (age === 18 && monthDiff < 0) || inputBirthday === "") {
      setBirthdayError(
        language === "ar"
          ? "يجب أن يكون عمرك أكبر من 18 عامَا!"
          : "You must be at least 18 years old."
      );
    } else {
      setBirthdayError("");
    }
  };
  const genderChangeHandler = (event) => {
    const inputGender = event.target.value;
    setGender(inputGender);

    if (inputGender === "male" || inputGender === "female") {
      setGenderError("");
    } else {
      setGenderError(
        language === "ar" ? "اختر جنسك!" : "Please enter your gender!"
      );
    }
  };
  const passwordChangeHandler = (event) => {
    const inputPassword = event.target.value.trim();
    setPassword(inputPassword);

    if (inputPassword.length < 8) {
      setPasswordError(
        language === "ar"
          ? " كلمة المرور يجب أن تكون مكونة من 8 أحرف على الأقل!"
          : "Your password must be at least 8 characters."
      );
    } else {
      setPasswordError("");
    }
  };
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <h1 className="register-header">
        {" "}
        {language === "ar" ? ":التسجيل" : "Register:"}
      </h1>
      <Form.Group controlId="formName">
        <Form.Label>{language === "ar" ? "الاسم:" : "Name:"}</Form.Label>
        <div className="input-group">
          <Form.Control
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

      <Form.Group controlId="formEmail">
        <Form.Label>
          {language === "ar" ? "البريد الالكترونى:" : "Email address:"}
        </Form.Label>
        <div className="input-group">
          <Form.Control
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

      <Form.Group controlId="formBirthday">
        <Form.Label>
          {language === "ar" ? "تاريخ الميلاد:" : "Birthday:"}
        </Form.Label>
        <div className="input-group">
          <Form.Control
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

      <Form.Group controlId="formGender">
        <Form.Label>{language === "ar" ? "الجنس:" : "Gender:"}</Form.Label>
        <div className="input-group">
          <Form.Control
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

      <Form.Group controlId="formPassword">
        <Form.Label>
          {language === "ar" ? "كلمة السر:" : "Password:"}
        </Form.Label>
        <div className="input-group">
          <Form.Control
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

      <Button variant="primary" type="submit">
        {language === "ar" ? "التسجيل" : "Register"}
      </Button>
      <ErrorModal
        show={showErrorModal}
        handleClose={handleCloseErrorModal}
        errors={[
          nameError,
          emailError,
          birthdayError,
          genderError,
          passwordError,
        ]}
      />
    </Form>
  );
};
export default Register;
