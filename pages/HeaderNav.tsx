import Nav from "./Nav";
export default function HeaderNav({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
