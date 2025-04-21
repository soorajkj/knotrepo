import * as React from "react";
import Link from "next/link";
import OAuths from "./o-auths";
import Separator from "~components/core/separator";

interface FormCardProps {
  title: string;
  description: string;
  form: React.ReactNode;
  prompt: string;
  label: string;
  href: string;
  socialproviders?: boolean;
}

export default function FormCard(props: FormCardProps) {
  const {
    title,
    description,
    form,
    prompt,
    href,
    label,
    socialproviders = true,
  } = props;

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl">
      <div className="flex flex-col items-center gap-1 pb-4 text-center">
        <h3 className="text-3xl font-semibold text-neutral-200">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      {form}
      <Separator>or</Separator>
      {socialproviders && <OAuths />}
      <div className="self-center">
        <p className="text-sm">
          <span>{prompt}</span>{" "}
          <Link href={href} className="font-medium">
            {label}
          </Link>
        </p>
      </div>
    </div>
  );
}
