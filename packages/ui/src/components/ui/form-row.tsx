import { cloneElement, isValidElement, ReactNode } from "react";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

export type FormRowProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  PrevIcon?: React.ElementType;
  action?: ReactNode;
  child: (field: ControllerRenderProps<FieldValues, string>) => ReactNode;
};

export const FormRow = (props: FormRowProps) => {
  const { label, name, required, child, className, PrevIcon, action } = props;
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            {label ? (
              <FormLabel className="font-semibold">
                {label}
                {required && <span className={"text-destructive"}>*</span>}
              </FormLabel>
            ) : null}
            <div className="relative">
              {PrevIcon ? (
                <PrevIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              ) : null}
              <FormControl>
                {child(field) && isValidElement(child(field))
                  ? cloneElement(child(field) as React.ReactElement, {
                      className: `${PrevIcon ? "pl-10" : ""} ${PrevIcon ? "pr-10" : ""}`,
                    })
                  : null}
              </FormControl>
              {action && isValidElement(action)
                ? cloneElement(action, {
                    className: `absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 ${(action as React.ReactElement).props.className || ""}`,
                  } as React.HTMLAttributes<HTMLElement>)
                : action}
              <FormMessage
                className={`FormRow__message absolute top-full text-sm text-destructive font-semibold`}
              />
            </div>
          </FormItem>
        );
      }}
    />
  );
};
