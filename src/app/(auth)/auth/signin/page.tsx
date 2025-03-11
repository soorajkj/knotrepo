import * as React from "react";
import FormCard from "~components/auth/FormCard";
import SigninForm from "~components/auth/SigninForm";

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
