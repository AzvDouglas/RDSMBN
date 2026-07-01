import logo from "../../assets/images/logo-rds.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="
        bg-[#005B46]
        text-white
        h-20
        flex
        items-center
      "
    >
      <img
        src={logo}
        alt="RDS Barra Nova"
        className="h-12"
      />
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          w-full
        "
      >
        <Link
          to="/"
          className="font-bold text-xl"
        >
          RDS Barra Nova
        </Link>
      </div>
    </header>
  );
}