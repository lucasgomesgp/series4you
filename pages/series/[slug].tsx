import { useRouter } from "next/router";

export default function Serie() {
  const { slug } = useRouter().query;
  return (
    <>
      <h1>Current Serie</h1>
      <span>{slug}</span>
    </>
  );
}
