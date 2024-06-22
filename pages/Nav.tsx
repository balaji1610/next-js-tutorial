import Link from "next/link";

export default function Nav({ children }) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/NavPages/About">About Page</Link>
          </li>
          <li>
            <Link href="/NavPages/Services">Services Page</Link>
          </li>
          <li>
            <Link href="/NavPages/Contact">Contact US Page</Link>
          </li>
        </ul>
      </div>

      <div>{children}</div>
    </div>
  );
}
