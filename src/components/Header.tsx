import "./Header.scss";
import type { FC } from "react";

type HeaderProps = {
    userName: string;
    userRole: string;
    isStudent: boolean;
};

const Header: FC <HeaderProps> = ({userName, userRole, isStudent}) => {
  return (
    <header className="header">
        <h1>{userName}</h1>
        <p className="role">{userRole}</p>
        <p className="status">{isStudent ? "Student Portfolio" : "Portfolio"}</p>
    </header>
  );
};

export default Header;
