import headlogo from "../assets/Globe.png";

function Header() {
  return (
    <header className="header">
      <img src={headlogo} alt="my header logo" />
      <span>My Travel Journal</span>
    </header>
  );
}
export default Header;
