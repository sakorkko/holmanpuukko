import { LinksFunction } from "@remix-run/node";
import styles from "./Footer.css";
export function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <p>twitter</p>
        <p>terms&conditions</p>
        <p>info</p>
      </div>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
