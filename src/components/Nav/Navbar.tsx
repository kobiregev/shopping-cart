import { matchPath, NavLink, useLocation } from "react-router-dom";
import { PATHS } from "../../constants";
import { Navitem } from "./NavItem";

export function Navbar() {
  let { pathname } = useLocation();
  return (
    <nav className="py-4 px-6 text-sm font-medium">
      <ul className="flex space-x-3">
        <Navitem path={PATHS.Home} isActive={pathname === PATHS.Home}>
          Home
        </Navitem>
        <Navitem path={PATHS.Store} isActive={pathname === PATHS.Store}>
          Store
        </Navitem>
        <Navitem path={PATHS.About} isActive={pathname === PATHS.About}>
          About
        </Navitem>
      </ul>
    </nav>
  );
}
