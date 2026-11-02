import { Link } from "react-router-dom";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        <Link to="item1">
          <li>Item-1</li>
        </Link>
        <Link to="item2">
          <li>Item-2</li>
        </Link>
        <Link to="item3">
          <li>Item-3</li>
        </Link>
        <Link to="item3">
          <li>Item-4</li>
        </Link>
      </ul>
    </>
  );
}

export default Items;
