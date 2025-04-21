import * as React from "react";
import FormCard from "~components/auth/form-card";
import SigninForm from "~components/auth/signin-form";

export default function Page() {
  return (
    <React.Fragment>
      <FormCard
        title="Welcome back"
        description="Welcome back! Please enter your details."
        form={<SigninForm />}
        prompt="Don't have an account ?"
        href="/auth/signup"
        label="Sign up"
      />
    </React.Fragment>
  );
}
