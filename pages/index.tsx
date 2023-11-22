import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Nav from "./Nav";

export default function index() {
  const dynamicLink = useRouter();
  return (
    <div>
      <Head>
        <title>Index Page</title>
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
      <h1>Nav</h1>
      <Nav />
      <h1>Home Page</h1>
    </div>
  );
}
