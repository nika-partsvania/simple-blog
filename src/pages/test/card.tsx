import { card } from "@/pages/test/card.styles";
import { CardProps } from "@/pages/test/card.types";

const Card: React.FC<CardProps> = ({ type = "horizontal" }) => {
  return (
    <div className="m-20 h-10 w-20 p-5 text-red-500">
      <div className={card({ type })}></div>
    </div>
  );
};

export default Card;
