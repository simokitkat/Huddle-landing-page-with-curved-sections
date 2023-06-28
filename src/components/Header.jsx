import logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Site logo" className="logo" />
        <button>Try It Free</button>
      </nav>
    </header>
  );
};
