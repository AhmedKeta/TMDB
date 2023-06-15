import "./Login.css";
import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ErrorModal from "../../components/common/ErrorModal/ErrorModal";
import LanguageContext from "../../context/language";
import EmailInput from "../../components/inputs/EmailInput/EmailInput";
import PasswordInput from "../../components/inputs/PasswordInput/PasswordInput";
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { language } = useContext(LanguageContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = [];
    if (!email)
      setEmailError(
        language === "ar"
          ? "اكتب بريدك الالكترونى!"
          : "Please enter your email!"
      );
    if (!password)
      setPasswordError(
        language === "ar" ? "اكتب كلمة المرور!" : "Please enter your password!"
      );
    if (emailError) errors.push(emailError);
    if (passwordError) errors.push(passwordError);
    if (!email || !password) errors.push("!!");
    if (errors.length > 0) {
      setShowErrorModal(true);
    } else {
      console.log({email, password });
    }
  };

  const emailHandler = (email, error) => {
    setEmail(email);
    setEmailError(error);
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
        {language === "ar" ? "تسجيل الدخول:" : "Login:"}
      </h1>
      <EmailInput onEmailChange={emailHandler} focus = {true}/>
      <PasswordInput onPasswordChange={passwordHandler} />
      <Button variant="primary" type="submit">
        {language === "ar" ? "تسجيل الدخول" : "Login"}
      </Button>
      <ErrorModal
        show={showErrorModal}
        handleClose={handleCloseErrorModal}
        errors={[
          emailError,
          passwordError,
        ]}
      />
    </Form>
  );};
export default Login;
