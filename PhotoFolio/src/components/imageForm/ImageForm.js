import styles from "./imageForm.module.css";
import { useEffect, useRef } from "react";

export const ImageForm = () => {
  //These state are create just for your convience you can create modify or delete the state as per your requirement.

  const imageTitleInput = useRef();
  const imageUrlInput = useRef();
  // function to handle image form submit
  const handleSubmit = (e) => {

  };
// function to thandle clearing the form
  const handleClear = () => {

  };
  // function to prefill the value of the form input 
  const handleDefaultValues = () => {

  };

  return (
    <div className={styles.imageForm}>
      <span>
        {!updateIntent
          ? `Add image to ${albumName}`
          : `Update image ${updateIntent.title}`}
      </span>

      <form onSubmit={handleSubmit}>
        <input required placeholder="Title" ref={imageTitleInput} />
        <input required placeholder="Image URL" ref={imageUrlInput} />
        <div className={styles.actions}>
          <button type="button" onClick={handleClear} disabled={loading}>
            Clear
          </button>
          <button disabled={loading}>Add</button>
        </div>
      </form>
    </div>
  );
};
