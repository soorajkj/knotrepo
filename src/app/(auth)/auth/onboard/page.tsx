import * as React from "react";
import Typography from "@/components/core/typography";
import OnboardForm from "@/components/auth/onboard-form";

export default function Page() {
  return (
    <React.Fragment>
      <div className="mb-8 space-y-1 text-center">
        <Typography.Title variant="5/bold">
          Choose your username
        </Typography.Title>
        <Typography.Text variant="sm/normal">
          Welcome back! Please enter your details.
        </Typography.Text>
      </div>
      <OnboardForm />
    </React.Fragment>
  );
}
