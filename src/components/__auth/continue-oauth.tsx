import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function ContinueOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" block>
        <Icon icon="google" width={20} height={20} />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
}
