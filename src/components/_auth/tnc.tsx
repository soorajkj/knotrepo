import * as React from "react";

export default function Tnc() {
  return (
    <div className="mt-auto py-4 sm:text-center">
      <p className="text-xs sm:mx-auto sm:max-w-sm">
        By continuing, you agree to Supabase&apos;s{" "}
        <a className="underline" href="">
          Terms of Service
        </a>{" "}
        and{" "}
        <a className="underline" href="">
          Privacy Policy
        </a>
        , and to receive periodic emails with updates.
      </p>
    </div>
  );
}
