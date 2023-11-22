import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
export default function post({ message }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <h1>getServerSideProps</h1>
      <h1>{message}</h1>
      <hr />
      <Link href="/">Home</Link>
      <hr />
      <div>
        Imperative Routing
        <button onClick={() => router.push("/")}>go to home</button>
      </div>
      <hr />
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { message: "Welcome to the About Page" },
    // notFound: true,
  };
}
