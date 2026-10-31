export const Navbar = () => {
  // get theme and lanauge contexts here

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button>dark theme</button>
        <span>{/* Show active language here */}</span>
      </div>
    </div>
  );
};
