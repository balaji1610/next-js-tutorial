import Link from "next/link";
export default function index() {
  return (
    <div>
      <h1>INDEX</h1>
      <Link href="/blog/blogPage">Click Here</Link>
    </div>
  );
}
