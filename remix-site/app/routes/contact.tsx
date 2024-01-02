import { ActionFunction, LinksFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import styles from "./contact.css";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  console.log(values);
  return new Response("Thanks!", { status: 200 });
};

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact me here!</h1>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf</p>
      <p>adfafsfsdfasdfasdfasdfasdfsdsfdasdfsdf</p>
      <Form method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
        <button type="submit">Send</button>
      </Form>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
