import { useContext } from "react";
import { cardContext } from "./context";
//Refactor this to use the useContext hook
export const Card = () => {
  const { text, color } = useContext(cardContext);

  return (
          <div className="card" style={{ backgroundColor: color }}>
            <h3>{text}</h3>
          </div>
        );
}


// export const Card = () => {
//   return (
//     <cardContext.Consumer>
//       {(value) => {
//         return (
//           <div className="card" style={{ backgroundColor: value.color }}>
//             <h3>{value.text}</h3>
//           </div>
//         );
//       }}
//     </cardContext.Consumer>
//   );
// };
