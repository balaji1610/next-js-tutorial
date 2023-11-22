import Link from "next/link";
import { useRouter } from "next/router";
export default function blogPage({ message }) {
  const router = useRouter();
  return (
    <div>
      <h1>getServerSideProps</h1>
      <h1>{message}</h1>
      <Link href="/">Home</Link>
      <div>
        Imperative Routing
        <button onClick={() => router.push("/")}>go to home</button>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { message: "Welcome to the About Page" },
    // notFound: true,
  };
}
