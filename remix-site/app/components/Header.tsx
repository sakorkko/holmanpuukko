import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import styles from "./Header.css";
export function Header() {
  return (
    <header>
      <Link to="/">HOLMAN PUUKKO</Link>
      <nav className="header-nav">
        <Link to="/">PORTFOLIO</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
