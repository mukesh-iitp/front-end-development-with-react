import { useState } from "react";

export const Navbar = () => {
  // remove this and get the value from context
  const [savedPosts, setSavedPosts] = useState([]);

  const [showSavedList, setShowSavedList] = useState(false);

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {/* show length of saved posts here */}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button>Reset</button>
    </div>
  );
};
