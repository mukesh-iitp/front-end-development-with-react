import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={styles.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.formHeading}>Sign Up</h3>
        <input style={styles.formInput} placeholder="Username" />
        <input style={styles.formInput} placeholder="Email" />
        <input style={styles.formInput} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.formButtons}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.cancleButton}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.loginButton}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}


const styles = {

  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },

  formHeading: { fontSize: "2rem", letterSpacing: 2 },

  formInput: { padding: 10 },

  formButtons: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },

  cancleButton: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  },

  loginButton: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }  

}
