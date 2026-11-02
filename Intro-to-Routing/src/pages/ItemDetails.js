import { useParams } from "react-router-dom";

function ItemDetails() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <main>
        <h1>ItemDetails Page</h1>
      </main>
      <h2>{params.itemID}</h2>
    </>
  );
}

export default ItemDetails;
