import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { List } from "../components/List";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/reducers/commentsReducer";

export const Home = () => {
  const disptach = useDispatch();

  const getComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      disptach(fetchSuccess(data));
    } catch (e) {
      disptach(fetchError());
    }
  };

  useEffect(() => {
    disptach(fetchStart());
    getComments();
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
