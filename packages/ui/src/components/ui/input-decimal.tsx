"use client";

import { forwardRef } from "react";
import { Input, InputProps } from "./input";

type InputDecimalProps = InputProps & {
  decimalPlaces?: number;
};

const extractNumber = (input: string): number => {
  // Extraire uniquement les chiffres
  const digits = input.replace(/\D/g, "");
  // Convertir en nombre et diviser par 100 pour obtenir les décimales
  return parseInt(digits, 10);
};

const convertMinNum = (input: string) => {
  if (input.length < 3) return input.padEnd(3, "0");
  return input;
};
export const InputDecimal = forwardRef<HTMLInputElement, InputDecimalProps>(
  ({ decimalPlaces = 2, ...props }, ref) => {
    const formatValue = (value: number) => {
      if (!value) return "0,00";
      const stringValue = value.toString();
      const integerPart = stringValue.slice(0, -2);
      const decimalPart = stringValue.slice(-2);
      return `${integerPart},${decimalPart}`;
    };

    return (
      <Input
        ref={ref}
        {...props}
        type="text"
        onChange={(e) => {
          const { value } = e.target;
          console.log(value);
          console.log(extractNumber(value));
          //@ts-ignore
          if (props.onChange) props.onChange(String(extractNumber(value)));
        }}
        // onChange={handleChange}
        defaultValue={Number("000")}
        value={formatValue(Number(props.value))}
      />
    );
  },
);
InputDecimal.displayName = "InputDecimal";
