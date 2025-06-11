import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>home</h2>

      <Link href="/about">Página about</Link>
    </div>
  );
}