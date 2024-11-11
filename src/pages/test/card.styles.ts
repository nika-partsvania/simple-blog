import { cva } from "class-variance-authority";

export const card = cva(["Card", "bg-red-500", "p-6", "text-10"], {
  variants: {
    type: {
      horizontal: ["w-160", "h-80"],
      vertical: ["w-80", "h-160"],
    },
  },
});
