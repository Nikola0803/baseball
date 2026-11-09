const CREST_SRC = "/images/logo.jpg";

type LogoMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap: Record<NonNullable<LogoMarkProps["size"]>, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
};

export default function LogoMark({ size = "md", className = "" }: LogoMarkProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden  bg-background-100 p-1 ${sizeMap[size]} ${className}`}
    >
      <img
        src={CREST_SRC}
        alt="Medvednica Baseball Club crest"
        title="Medvednica Baseball Club | Bear crest"
        className="h-full w-full object-contain"
      />
    </span>
  );
}
