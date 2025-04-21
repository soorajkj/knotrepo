export default function Footer() {
  return (
    <div className="relative mx-auto h-auto w-full max-w-md">
      <div className="relative flex h-full min-h-32 flex-col flex-nowrap items-center justify-center gap-3 overflow-visible p-4">
        <p className="text-sm leading-none">
          © 2024 Linker by @justinmfarrugia
        </p>
        <div className="flex items-center gap-3 text-sm">
          <p>Purchase template</p>
          <p>·</p>
          <p>Become an affiliate</p>
        </div>
      </div>
    </div>
  );
}
