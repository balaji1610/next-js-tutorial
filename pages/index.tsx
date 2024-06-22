import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Home from "./NavPages/Home";
export default function index() {
  const dynamicLink = useRouter();
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <hr />
      <h1>INDEX</h1>
      <Link href="/blog/post">Click Here</Link>
      <hr />
      <Layout>Children Data</Layout>
      <hr />
      <button onClick={() => dynamicLink.push("/blog/balaji")}>
        Dynamic Routing
      </button>
      <hr />
      <h1>Common Navigation</h1>
      <Home />
      <hr />
      <Link href="./checkPage">checkPage</Link>
    </div>
  );
}
