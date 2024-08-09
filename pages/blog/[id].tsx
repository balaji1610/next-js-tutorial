import { useRouter } from "next/router";

export default function dynamicRoute() {
  const rout = useRouter();
  // const getId = rout.query.id;
  return (
    <div>
      <h1>dynamicRoute</h1>
    </div>
  );
}
