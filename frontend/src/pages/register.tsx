import React from "react";

import { useAuthForm } from "../hooks";

import AuthForm from "../components/auth/Form";
import EmailField from "../components/auth/EmailField";
import PasswordField from "../components/auth/PasswordField";
import ConfirmPasswordField from "../components/auth/ConfirmPasswordField";

type RegisterData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initData: RegisterData = {
  email: "",
  password: "",
  confirmPassword: ""
};

const RegisterPage = () => {
  const [fields, errors, loading, handleChange, register] = useAuthForm(
    initData,
    "/api/users/create"
  );

  return (
    <AuthForm
      title="Create account"
      onSubmit={register}
      loading={loading}
      buttonText="Create"
      redirectText="Already have an account? Login"
      redirectPath="/login"
      generalError={errors.general}
    >
      <EmailField
        value={fields.email}
        onChange={handleChange}
        err={errors.email}
      />
      <PasswordField
        value={fields.password}
        onChange={handleChange}
        err={errors.password}
      />
      <ConfirmPasswordField
        value={fields.confirmPassword}
        onChange={handleChange}
        err={errors.confirmPassword}
      />
    </AuthForm>
  );
};

export default RegisterPage;
