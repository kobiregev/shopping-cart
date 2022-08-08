import { NavLink } from "react-router-dom";

type NavitemProps = {
  path: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

export function Navitem({ path, isActive, children }: NavitemProps) {
  return (
    <li>
      <NavLink
        to={path}
        className={`block px-3 py-2 rounded-md ${
          isActive ? "bg-sky-500 text-white" : "bg-slate-50"
        }`}
      >
        {children}
      </NavLink>
    </li>
  );
}
