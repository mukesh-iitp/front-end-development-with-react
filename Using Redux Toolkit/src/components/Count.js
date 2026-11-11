import { useSelector } from "react-redux";

export const Count = () => {
  const { count } = useSelector((state) => state.counterReducer);

  return <b>{count}</b>;
};
