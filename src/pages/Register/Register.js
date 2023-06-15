import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import ErrorModal from "../../components/common/ErrorModal/ErrorModal";
import LanguageContext from "../../context/language";
import NameInput from "../../components/inputs/NameInput/NameInput";
import EmailInput from "../../components/inputs/EmailInput/EmailInput";
import BirthdayInput from "../../components/inputs/BirthdayInput/BirthdayInput";
import GenderInput from "../../components/inputs/GenderInput/GenderInput";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
const Register = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
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

  const nameHandler = (name, error) => {
    setName(name);
    setNameError(error);
  };
  const emailHandler = (email, error) => {
    setEmail(email);
    setEmailError(error);
  };
  const birthdayHandler = (birthday, error) => {
    setBirthday(birthday);
    setBirthdayError(error);
  };
  const genderHandler = (gender, error) => {
    setGender(gender);
    setGenderError(error);
  };
  const passwordHandler = (password, error) => {
    setPassword(password);
    setPasswordError(error);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <h1 className="register-header">
        {" "}
        {language === "ar" ? "التسجيل:" : "Register:"}
      </h1>
      <NameInput onNameChange={nameHandler} focus = {true} />
      <EmailInput onEmailChange={emailHandler} />
      <BirthdayInput onBirthdayChange={birthdayHandler} />
      <GenderInput onGenderChange={genderHandler} />
      <PasswordInput onPasswordChange={passwordHandler} />
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
