import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Knife } from "../data/knives";
import PortfolioListStyles from "./PortfolioList.css";

export function PortfolioList({ knives }: { knives: Knife[] }) {
  return (
    <div className="portfolio-container">
      <h1>Portfolio List</h1>
      <ul className="portfolio-list">
        {knives.map((item) => (
          <li key={item.url} className={`portfolio-list-item`}>
            <Link to={`/knives/${item.id}`}>
              <img src={item.url} alt={item.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: PortfolioListStyles }];
};
