const CREST_SRC =
  "https://storage.helloreaddy.io/project_files/8979afdd-4f59-418a-b171-395db2d04af6/48134d4b-cc9c-4af9-ac9d-0d1828ab7720_compressed_WhatsApp-Image-2026-10-21-at-09.53.42.webp";

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