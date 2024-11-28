import { cva } from "class-variance-authority";

export const ButtonStyle = cva(["w-12 sm:w-8 md:w-6"], {
  variants: {
    type: {
      primary: "",
      secondary: "",
    },
  },
});
