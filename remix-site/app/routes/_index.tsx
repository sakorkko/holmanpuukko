import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import {
  PortfolioList,
  links as portfolioLinks,
} from "../components/PortfolioList";
import { getKnives } from "../data/knives";
import styles from "./index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Holman puukko" },
    { name: "description", content: "Handmade knives" },
  ];
};

export const links: LinksFunction = () => {
  return [...portfolioLinks(), { rel: "stylesheet", href: styles }];
};

export const loader: LoaderFunction = async () => {
  const knives = getKnives();
  if (!knives) {
    throw new Response("Knives not found", { status: 404 });
  }
  return json(knives);
};

export default function Index() {
  const knives = useLoaderData<typeof loader>();

  return (
    <div className="main-container">
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf!</p>
      <h2>Portfolio</h2>
      <PortfolioList knives={knives} />
    </div>
  );
}
