import logo from "../../assets/images/logo-rds.png";

export default function Navbar() {
  return (
    <header>
      <img
        src={logo}
        alt="RDS Barra Nova"
        className="h-12"
      />
    </header>
  );
}