import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  variant,
  href,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 text-sm uppercase tracking-widest font-body transition-all duration-300 rounded-none";
  const variants = {
    primary: "bg-royal text-cream hover:bg-royal-deep",
    secondary: "border-2 border-royal text-royal hover:bg-royal hover:text-cream",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
