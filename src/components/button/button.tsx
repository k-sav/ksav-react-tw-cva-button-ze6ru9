import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(
  "button transition-all flex items-center focusable border justify-center select-none duration-300",
  {
    variants: {
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
      intent: {
        primary: [
          "bg-primary",
          "text-white",
          "border-transparent",
          // "hover-hover:hover:bg-primary-alt",
          // "active:bg-primary-alt",
        ],
        secondary: [
          "bg-transparent",
          "text-gray-800",
          "border-sand",
          // "hover-hover:hover:bg-chalk",
          // "hover-hover:hover:border-chalk",
          // "active:bg-chalk",
          // "active:border-chalk",
        ],
        tertiary: [
          "bg-fuschia",
          "text-white",
          "border-transparent",
          // "hover-hover:hover:bg-fuschia-alt",
          // "active:bg-fuschia-alt",
        ],
      },
      size: {
        small: ["text-sm", "py-2", "px-4"],
        medium: ["text-base", "py-2.5", "px-5"],
        large: ["text-lg", "py-2.5", "px-6"],
        xl: ["text-xl", "py-3", "px-6"],
      },

      border: {
        true: "",
        false: "",
      },
      elevation: {
        none: "shadow-none",
        "1": "shadow shadow-black/25",
        sm: "shadow-sm shadow-black/25",
        md: "shadow-md shadow-black/25",
        lg: "shadow-lg shadow-black/25",
        xl: "shadow-xl shadow-black/25",
        "2xl": "shadow-2xl shadow-black/25",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      {
        intent: ["secondary"],
        border: false,
        disabled: false,
        class: "border-transparent",
      },
      // {
      //   intent: ["secondary"],
      //   border: false,
      //   disabled: true,
      //   class: "",
      // },
      {
        intent: ["primary"],
        disabled: true,
        class:
          "bg-primary/70 hover-hover:hover:bg-primary/70 active:bg-primary/70",
      },
      {
        intent: ["primary"],
        disabled: false,
        class: "hover-hover:hover:bg-primary-alt active:bg-primary-alt",
      },
      {
        intent: ["tertiary"],
        disabled: true,
        class:
          "bg-fuschia/70 hover-hover:hover:bg-fuschia/70 active:bg-fuschia/70",
      },
      {
        intent: ["tertiary"],
        disabled: false,
        class: "hover-hover:hover:bg-fuschia-alt active:bg-fuschia-alt",
      },
      {
        intent: "secondary",
        disabled: true,
        class: "bg-chalk/70 hover-hover:hover:bg-chalk/70 active:bg-chalk/70",
      },
      {
        intent: "secondary",
        disabled: false,
        class: "hover-hover:hover:bg-chalk active:bg-chalk",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      radius: "3xl",
      elevation: "none",
      border: true,
      disabled: false,
    },
  }
);

export interface ButtonVariantProps extends VariantProps<typeof button> {}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

// do you ship react components or just the cva function or both?
export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  radius,
  elevation,
  border,
  disabled,

  ...props
}) => (
  <button
    className={button({
      intent,
      size,
      className,
      radius,
      elevation,
      border,
      disabled,
    })}
    {...props}
  />
);
