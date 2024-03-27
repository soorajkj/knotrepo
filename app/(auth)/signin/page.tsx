import * as React from "react";
import Link from "next/link";
import Separator from "@/components/core/separator";
import Typography from "@/components/core/typography";
import SigninForm from "@/components/signin-form";
import SigninWithOAuth from "@/components/signin-with-oauth";

export default function page() {
  return (
    <React.Fragment>
      <div className="mb-8 space-y-1 text-center">
        <Typography.Title variant="5/bold">Welcome back!</Typography.Title>
        <Typography.Text variant="sm/normal">
          Welcome back! Please enter your details.
        </Typography.Text>
      </div>
      <SigninForm />
      <div className="my-8">
        <Separator />
      </div>
      <SigninWithOAuth />
      <div className="mt-8 flex flex-col space-y-4 sm:mx-auto sm:max-w-sm sm:text-center">
        <Typography.Text variant="sm/normal">
          Dont&apos;t have an account? <Link href="/signup">Signup</Link>
        </Typography.Text>
        <Typography.Text variant="xs/normal">
          By continuing, you agree to our Terms of Service and Privacy Policy,
          and to receive periodic emails with updates.
        </Typography.Text>
      </div>
    </React.Fragment>
  );
}
