interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <p
        className={`font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-500 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {index && (
          <span className="font-poster text-[15px] leading-none text-foreground-300">
            {index}
          </span>
        )}
        <span className="inline-block h-[2px] w-9 bg-primary-500" />
        {eyebrow}
      </p>
      <h2 className="font-heading mt-5 text-[clamp(32px,4.6vw,58px)] uppercase leading-[0.88] tracking-[-0.03em] text-foreground-950">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[56ch] text-[16px] leading-[1.75] text-foreground-500 md:text-[17px] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}