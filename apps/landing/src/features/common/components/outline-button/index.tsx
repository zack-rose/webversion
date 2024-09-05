import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/features/common/utils/tailwind";

interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  asChild?: boolean;
}

export const OutlineButton = ({
  className,
  asChild,
  variant = "primary",
  ...rest
}: OutlineButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "rounded-3xl px-5 py-1 outline-none transition duration-700 ease-in-out transform hover:translate-x-1",
        {
          "bg-3deg-cream-100 text-white text-balance font-bold hover:bg-transparent border-3deg-cream-100 hover:border":
            variant === "primary",
          "bg-transparent text-white border border-white text-sm font-medium hover:bg-3deg-cream-100":
            variant === "tertiary",
        },

        className
      )}
      {...rest}
    />
  );
};
