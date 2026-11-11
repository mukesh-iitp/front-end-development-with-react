import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Timer = () => {
  const { isRunning, elapsedTime } = useSelector((state) => state);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // disptach incrementTimer action here
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return <b>{elapsedTime}</b>;
};
