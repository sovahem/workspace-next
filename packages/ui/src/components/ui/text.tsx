import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

// Définition des variantes de style pour le texte avec cva
const textCva = cva(
  "transition-colors ease-in-out duration-300", // Classes de base communes pour tous les textes
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
      },
      weight: {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
      color: {
        primary: "text-primary", // Assurez-vous que cette classe est définie dans votre configuration Tailwind
        secondary: "text-secondary",
        accent: "text-accent",
        muted: "text-[#ACAAAB]",
      },
      alignment: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
      color: "primary",
      alignment: "left",
    },
  },
);

export type TextProps = VariantProps<typeof textCva> & {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  dataCy?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  size,
  weight,
  color,
  alignment,
  className,
  dataCy,
  as: Component = "p",
}) => {
  // Application des variantes sélectionnées
  const textClasses = textCva({ size, weight, color, alignment });

  return (
    <Component data-cy={dataCy} className={cn(textClasses, className)}>
      {children}
    </Component>
  );
};
