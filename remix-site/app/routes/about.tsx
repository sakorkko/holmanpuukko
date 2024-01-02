import { LinksFunction } from "@remix-run/node";
import styles from "./about.css";

export default function About() {
  return (
    <div className="about">
      <h1>Something about me here</h1>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf!</p>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf!</p>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf!</p>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf!</p>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf!</p>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
