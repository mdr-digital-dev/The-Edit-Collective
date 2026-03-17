interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-display text-4xl md:text-5xl ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-0.5 bg-gold mt-6 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`font-body text-lg mt-4 max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-cream/70" : "text-charcoal/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
