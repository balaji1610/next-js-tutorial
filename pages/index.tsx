import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Nav from "./Nav";
export default function index() {
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
      <h1>Nav</h1>
      <Nav />
      <h1>Home Page</h1>
    </div>
  );
}
