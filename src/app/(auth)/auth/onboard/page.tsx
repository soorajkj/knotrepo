import * as React from "react";
import Typography from "@/components/core/typography";
import OnboardForm from "@/components/auth/onboard-form";

export default function page() {
  return (
    <React.Fragment>
      <div className="mb-8 space-y-1">
        <Typography.Title variant="5/bold">Welcome back!</Typography.Title>
        <Typography.Text variant="sm/normal">
          Welcome back! Please enter your details
        </Typography.Text>
      </div>
      <div className="flex flex-col gap-6">
        <OnboardForm />
      </div>
    </React.Fragment>
  );
}
