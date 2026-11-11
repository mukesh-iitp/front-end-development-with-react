import { useEffect } from "react";
import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";

export const Timer = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(alertSelector);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
    }
  }, [message]);

  return (
    <div className="page">
      {message && <div className="alert">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
