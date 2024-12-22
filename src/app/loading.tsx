import Icon from "@/components/core/icon";

export default function Loading() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <Icon icon="Loader" className="size-6 animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
