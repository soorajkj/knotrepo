import Button from "@/components/core/Button";
import Icon from "@/components/core/Icon";

export default function SignupWithOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" block>
        <Icon icon="google" width={20} height={20} />
        <span>Sign up with Google</span>
      </Button>
    </div>
  );
}
