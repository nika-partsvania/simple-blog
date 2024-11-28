import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type?: "primary" | "secondary" | "tertiary";
  classname?: string;
};

const Button: React.FC<ButtonProps> = ({ classname }) => {
  return (
    <div className={twMerge("bg-gray-200 px-12 py-4", classname)}>Button</div>
  );
};

export default Button;
