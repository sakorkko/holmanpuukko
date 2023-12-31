import { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { links as headerLinks } from "../components/Header";
import { getKnifeById } from "../data/knives";
import styles from "./knives.css";

export const loader: LoaderFunction = async ({ params }) => {
  const knifeId = params.knifeId;
  if (!knifeId) {
    throw new Response("Knife not found", { status: 404 });
  }
  const knife = getKnifeById(knifeId);
  return knife;
};

export default function KnifeById() {
  const knife = useLoaderData<typeof loader>();

  return (
    <div className="knife-container">
      <div className="knife-img">
        <img src={knife.url} alt={knife.title} />
      </div>

      <div className="knife-info">
        <h1>{knife.title}</h1>
        <p>{knife.description}</p>
      </div>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [...headerLinks(), { rel: "stylesheet", href: styles }];
};
