import "./Header.scss";
import type { FC } from "react";

type HeaderProps = {
    userName: string;
    userRole: string;
};

const Header: FC <HeaderProps> = ({userName, userRole}) => {
  return (
    <header className="header">
        <h1>{userName}</h1>
        <p className="role">{userRole}</p>
    </header>
  );
};

export default Header;
