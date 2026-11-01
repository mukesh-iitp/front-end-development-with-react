import { createContext , useState, useContext } from "react";

// create post context here
const postContext = createContext();

// Create custom hook that returns context value here
export const usePostsValue = () => {
  const value = useContext(postContext);
  return value;
};

// create a custom saved post provider here with add and reset functions
export const PostContextProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  const resetPosts = () => setSavedPosts([]);

  const isPostSaved = (post) => !!savedPosts.find((p) => p.id === post.id);

  const savePost = (post) => {
    const isSaved = isPostSaved(post);
    if (isSaved) {
      return alert("Post is already saved.");
    }
    setSavedPosts((prev) => [post, ...prev]);
  };

  return (
    <postContext.Provider
      value={{ savedPosts, setSavedPosts, resetPosts, savePost, isPostSaved }}
    >
      {children}
    </postContext.Provider>
  );
};
