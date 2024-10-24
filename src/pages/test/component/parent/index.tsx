import { PropsWithChildren, useCallback, useState } from "react";
import Child from "../child";

const Parent: React.FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = useCallback(() => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }, []);

  return (
    <div>
      <div>Count - {count} </div>
      <Child handleIncreaseCount={handleIncreaseCount} />
      {children}
    </div>
  );
};

export default Parent;

// useMemo - value
// useCallback - function
// memo - component
