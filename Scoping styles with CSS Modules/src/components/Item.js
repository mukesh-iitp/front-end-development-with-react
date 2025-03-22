import ItemStyles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={ItemStyles.container}>
      <h3 className={ItemStyles.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className="image" />
      <p>
        <strong className={ItemStyles.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
