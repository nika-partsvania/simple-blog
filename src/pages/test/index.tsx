import { useState, useRef } from "react";

const TestView = () => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  const intervalId = useRef<any>(null);

  const handleStartTimer = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStopTimer = () => {
    clearInterval(intervalId.current);
  };

  const timePassed = (now - startTime) / 1000;

  return (
    <div style={{ minHeight: "100vh", padding: 100 }}>
      <div onClick={handleStartTimer}>Start Timer</div>
      <div onClick={handleStopTimer}>Stop</div>
      <div>Time Passed: {timePassed}</div>
    </div>
  );
};

export default TestView;
