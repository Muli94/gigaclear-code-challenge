"use client";

import { cva } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

const typographyVariants = cva("font-medium", {
  variants: {
    variant: {
      h1: "text-8xl",
      h2: "text-6xl",
      h3: "text-5xl",
      h4: "text-4xl",
      h5: "text-2xl",
      h6: "text-xl",
      body1: "text-base font-normal",
      body2: "text-sm font-normal",
      subheading1: "text-base",
      subheading2: "text-sm",
    },
    color: {
      primary: "text-primary-default",
      secondary: "text-secondary-default",
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "body1",
  },
});

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant: keyof typeof variantsMapping;
  color: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ children, color, className, variant, ...props }: TypographyProps) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component {...props} className={cn(typographyVariants({ variant, color, className }))}>
      {children}
    </Component>
  );
};

export default Typography;
