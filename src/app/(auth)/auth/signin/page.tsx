import * as React from "react";
import Link from "next/link";
import Separator from "@/components/core/separator";
import Typography from "@/components/core/typography";
import OAuthForm from "@/components/auth/oauth-form";
import SigninForm from "@/components/auth/signin-form";

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
        <SigninForm />
        <Separator>Or</Separator>
        <OAuthForm label="Sign in" />
      </div>
      <div className="mt-8 flex flex-col space-y-4 sm:mx-auto sm:max-w-sm sm:text-center">
        <Typography.Text variant="sm/normal">
          Dont&apos;t have an account?{" "}
          <Link href="/auth/signup" className="font-semibold text-primary">
            Signup
          </Link>
        </Typography.Text>
        <Typography.Text variant="xs/normal">
          By continuing, you agree to our Terms of Service and Privacy Policy,
          and to receive periodic emails with updates.
        </Typography.Text>
      </div>
    </React.Fragment>
  );
}
