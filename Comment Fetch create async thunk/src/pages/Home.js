import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { List } from "../components/List";
import {
  fetchStart,
  getCommentsAsync
} from "../redux/reducers/commentsReducer";

export const Home = () => {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchStart());
    disptach(getCommentsAsync());
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
