import { memo } from "react";

const Child: React.FC<{ handleIncreaseCount: () => void }> = ({
  handleIncreaseCount,
}) => {
  console.log("Child is Rerendering");
  return (
    <div>
      <div onClick={handleIncreaseCount}>(CHILD) - Increase Count</div>
    </div>
  );
};

export default memo(Child);
